"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { QUESTION_BANK, type QuizQuestion } from "@/lib/questions"
import { cn } from "@/lib/utils"

type SelectedCount = 5 | 10 | 20 | "all"
type RankingItem = {
  id: number
  nickname: string
  score: number
  totalQuestions: number
  accuracy: number
  createdAt: string
}

const COUNT_OPTIONS: SelectedCount[] = [5, 10, 20, "all"]

const shuffle = <T,>(arr: T[]) => {
  const cloned = [...arr]
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cloned[i], cloned[j]] = [cloned[j], cloned[i]]
  }
  return cloned
}

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const [selectedCount, setSelectedCount] = useState<SelectedCount>(10)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [gameFinished, setGameFinished] = useState(false)
  const [nickname, setNickname] = useState("")
  const [isSavingRank, setIsSavingRank] = useState(false)
  const [rankSaved, setRankSaved] = useState(false)
  const [rankingError, setRankingError] = useState<string | null>(null)
  const [rankings, setRankings] = useState<RankingItem[]>([])

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = useMemo(() => {
    if (!quizQuestions.length) return 0
    return ((currentQuestionIndex + 1) / quizQuestions.length) * 100
  }, [currentQuestionIndex, quizQuestions.length])

  const startGame = (count: SelectedCount) => {
    const pool = shuffle(QUESTION_BANK)
    const pickedQuestions =
      count === "all" ? pool : pool.slice(0, Math.min(count, QUESTION_BANK.length))
    const nextQuestions = pickedQuestions.map((question) => ({
      ...question,
      options: shuffle(question.options),
    }))

    setQuizQuestions(nextQuestions)
    setGameStarted(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setGameFinished(false)
    setNickname("")
    setIsSavingRank(false)
    setRankSaved(false)
    setRankingError(null)
  }

  const handleSelectOption = (option: string) => {
    if (!currentQuestion || showAnswer) return

    setSelectedOption(option)
    setShowAnswer(true)
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1)
    }
  }

  const goNextQuestion = useCallback(() => {
    if (!quizQuestions.length) return
    const isLast = currentQuestionIndex >= quizQuestions.length - 1

    if (isLast) {
      setGameFinished(true)
      return
    }

    setCurrentQuestionIndex((prev) => prev + 1)
    setSelectedOption(null)
    setShowAnswer(false)
  }, [currentQuestionIndex, quizQuestions.length])

  const resetToSettings = () => {
    setGameStarted(false)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setQuizQuestions([])
    setGameFinished(false)
    setNickname("")
    setIsSavingRank(false)
    setRankSaved(false)
    setRankingError(null)
    setRankings([])
  }

  const fetchRankings = useCallback(async () => {
    try {
      const response = await fetch("/api/rankings", { cache: "no-store" })
      if (!response.ok) throw new Error("failed")
      const data = (await response.json()) as RankingItem[]
      setRankings(data)
    } catch {
      setRankingError("랭킹을 불러오지 못했습니다. DB 연결을 확인해주세요.")
    }
  }, [])

  const submitRanking = async () => {
    const safeNickname = nickname.trim()
    if (!safeNickname || rankSaved || isSavingRank || !quizQuestions.length) return

    try {
      setIsSavingRank(true)
      setRankingError(null)
      const response = await fetch("/api/rankings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname: safeNickname,
          score,
          totalQuestions: quizQuestions.length,
        }),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { message?: string } | null
        throw new Error(payload?.message ?? "랭킹 저장 실패")
      }

      setRankSaved(true)
      await fetchRankings()
    } catch (error) {
      setRankingError(error instanceof Error ? error.message : "랭킹 저장에 실패했습니다.")
    } finally {
      setIsSavingRank(false)
    }
  }

  useEffect(() => {
    if (!showAnswer || gameFinished) return

    const timer = setTimeout(() => {
      goNextQuestion()
    }, 1000)

    return () => clearTimeout(timer)
  }, [showAnswer, gameFinished, goNextQuestion])

  useEffect(() => {
    if (!gameFinished) return
    fetchRankings()
  }, [gameFinished, fetchRankings])



  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white px-4 py-8 text-slate-900 sm:py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!gameStarted && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <Card className="w-full border-slate-200 shadow-xl">
                <CardHeader className="space-y-3">
                  <Badge className="w-fit rounded-full bg-slate-900 text-white">Algorithm Meme Quiz</Badge>
                  <CardTitle className="text-2xl leading-tight sm:text-3xl">
                    Algorithm Tag 4-Choice Quiz Game
                  </CardTitle>
                  <p className="text-sm text-slate-600 sm:text-base">
                   설명을 보고 원래 알고리즘 이름을 맞혀보세요.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm font-semibold text-slate-700">문제 수 선택</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {COUNT_OPTIONS.map((count) => {
                      const label = count === "all" ? "All" : `${count}`
                      const selected = selectedCount === count
                      return (
                        <Button
                          key={label}
                          variant={selected ? "default" : "outline"}
                          className={cn(
                            "h-11 rounded-full text-base transition-all",
                            selected && "shadow-md"
                          )}
                          onClick={() => setSelectedCount(count)}
                        >
                          {label}
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="h-11 w-full rounded-full text-base"
                    onClick={() => startGame(selectedCount)}
                  >
                    게임 시작
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {gameStarted && !gameFinished && currentQuestion && (
            <motion.div
              key={`quiz-${currentQuestionIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <Card className="w-full border-slate-200 shadow-xl">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>
                      {currentQuestionIndex + 1} / {quizQuestions.length}
                    </span>
                    <span>점수: {score}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <Badge variant="secondary" className="w-fit rounded-full">
                    {currentQuestion.difficulty}
                  </Badge>
                  <CardTitle className="text-lg leading-relaxed sm:text-xl">
                    {currentQuestion.clue}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-2">
                  { currentQuestion.options.map((option) => {
                    const isSelected = selectedOption === option
                    const isCorrect = option === currentQuestion.answer
                    const shouldHighlightWrong = showAnswer && isSelected && !isCorrect
                    const shouldHighlightCorrect = showAnswer && isCorrect

                    return (
                      <motion.div
                        key={option}
                        animate={shouldHighlightCorrect ? { scale: [1, 1.02, 1] } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="outline"
                          disabled={showAnswer}
                          onClick={() => handleSelectOption(option)}
                          className={cn(
                            "h-auto min-h-12 w-full justify-start rounded-2xl px-4 py-3 text-left text-sm whitespace-normal sm:text-base",
                            showAnswer && "opacity-100",
                            shouldHighlightCorrect &&
                              "border-emerald-500 bg-emerald-50 text-emerald-700 hover:bg-emerald-50",
                            shouldHighlightWrong &&
                              "border-rose-500 bg-rose-50 text-rose-700 hover:bg-rose-50"
                          )}
                        >
                          {option}
                        </Button>
                      </motion.div>
                    )
                  })}
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm font-medium text-slate-700">
                    {showAnswer ? (
                      selectedOption === currentQuestion.answer ? (
                        <span className="text-emerald-600">정답!</span>
                      ) : (
                        <span className="text-rose-600">
                          오답! 정답: <strong>{currentQuestion.answer}</strong>
                        </span>
                      )
                    ) : (
                      <span className="text-slate-500">보기를 선택하면 즉시 채점됩니다.</span>
                    )}
                  </div>
                  <Button
                    variant="secondary"
                    className="rounded-full"
                    onClick={goNextQuestion}
                    disabled={!showAnswer}
                  >
                    다음 문제
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {gameStarted && gameFinished && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <Card className="w-full border-slate-200 shadow-xl">
                <CardHeader className="space-y-2">
                  <Badge className="w-fit rounded-full bg-emerald-600 text-white">Game Finished</Badge>
                  <CardTitle className="text-2xl sm:text-3xl">결과</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-slate-700">
                  <p className="text-lg font-semibold">
                    {score} / {quizQuestions.length} 정답
                  </p>
                  <p className="text-base">
                    정확도 {Math.round((score / Math.max(quizQuestions.length, 1)) * 100)}%
                  </p>
                  <div className="space-y-2 pt-3">
                    <p className="text-sm font-semibold text-slate-700">닉네임 등록</p>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <input
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="닉네임 (최대 20자)"
                        maxLength={20}
                        className="h-10 flex-1 rounded-full border border-slate-300 bg-white px-4 text-sm outline-none ring-0 transition focus:border-slate-500"
                        disabled={isSavingRank || rankSaved}
                      />
                      <Button
                        onClick={submitRanking}
                        disabled={!nickname.trim() || isSavingRank || rankSaved}
                        className="rounded-full"
                      >
                        {rankSaved ? "등록 완료" : isSavingRank ? "저장 중..." : "랭킹 등록"}
                      </Button>
                    </div>
                  </div>
                  {rankingError && <p className="text-sm text-rose-600">{rankingError}</p>}
                  <div className="space-y-2 pt-2">
                    <p className="text-sm font-semibold text-slate-700">실시간 랭킹 TOP 20</p>
                    <div className="max-h-56 space-y-2 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3">
                      {rankings.length === 0 ? (
                        <p className="text-sm text-slate-500">아직 등록된 기록이 없습니다.</p>
                      ) : (
                        rankings.map((rank, index) => (
                          <div
                            key={rank.id}
                            className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm"
                          >
                            <span className="font-semibold">
                              #{index + 1} {rank.nickname}
                            </span>
                            <span className="text-slate-700">
                              {rank.score}/{rank.totalQuestions} ({Math.round(rank.accuracy)}%)
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Button className="rounded-full" onClick={() => startGame(selectedCount)}>
                    다시 시작
                  </Button>
                  <Button variant="outline" className="rounded-full" onClick={resetToSettings}>
                    설정으로 돌아가기
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
