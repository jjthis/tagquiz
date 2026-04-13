import { NextResponse } from "next/server"
import { z } from "zod"

import { getDb } from "@/lib/db"

type RankingRow = {
  id: number
  nickname: string
  score: number
  total_questions: number
  accuracy: number
  created_at: string
}

const rankingInputSchema = z.object({
  nickname: z.string().trim().min(1).max(20),
  score: z.number().int().min(0),
  totalQuestions: z.number().int().min(1),
})

export async function GET() {
  try {
    const db = getDb()
    const rows = db
      .prepare(
        `SELECT id, nickname, score, total_questions, accuracy, created_at
         FROM rankings
         ORDER BY score DESC, accuracy DESC, created_at ASC
         LIMIT 20`
      )
      .all() as RankingRow[]

    return NextResponse.json(
      rows.map((row) => ({
        id: row.id,
        nickname: row.nickname,
        score: row.score,
        totalQuestions: row.total_questions,
        accuracy: Number(row.accuracy),
        createdAt: row.created_at,
      }))
    )
  } catch (error) {
    console.error("Failed to fetch rankings", error)
    return NextResponse.json({ message: "랭킹을 불러오지 못했습니다." }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = rankingInputSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ message: "입력값이 올바르지 않습니다." }, { status: 400 })
    }

    const { nickname, score, totalQuestions } = parsed.data
    const accuracy = Number(((score / totalQuestions) * 100).toFixed(2))
    const db = getDb()
    db.prepare(
      `INSERT INTO rankings (nickname, score, total_questions, accuracy)
       VALUES (?, ?, ?, ?)`,
    ).run(nickname, score, totalQuestions, accuracy)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Failed to save ranking", error)
    return NextResponse.json({ message: "랭킹 저장에 실패했습니다." }, { status: 500 })
  }
}
