# Algorithm Tag 4-Choice Quiz Game

허세 가득한 알고리즘 설명 문장을 보고 원래 알고리즘 이름을 맞추는 4지선다 웹 게임입니다.
친구끼리 빠르게 돌리면서 웃긴 문제를 맞히는 밈성 퀴즈를 목표로 합니다.

## 주요 기능

- 문제 수 선택: `5 / 10 / 20 / All`
- 보기 클릭 즉시 정오답 피드백
- 자동 다음 문제(1초) + 수동 다음 버튼
- 게임 종료 후 닉네임 입력 및 랭킹 등록
- 로컬 SQLite 파일(`data/rankings.db`) 기반 랭킹 저장/조회

## 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- SQLite (`better-sqlite3`)

## 실행 방법

1. 의존성 설치

```bash
npm install
```

2. 개발 서버 실행

```bash
npm run dev
```

3. 브라우저 접속

`http://localhost:3000`

## 로컬 DB 설명

- 서버 실행 시 `data/rankings.db` 파일이 자동 생성됩니다.
- 랭킹 테이블이 없으면 자동으로 생성됩니다.
- 참고용 스키마는 `db/schema.sql`에 있습니다.
- DB 파일은 `.gitignore`에 포함되어 Git에 올라가지 않습니다.

## API

- `GET /api/rankings`
  - 랭킹 TOP 20 조회
- `POST /api/rankings`
  - 요청 바디:
    - `nickname: string`
    - `score: number`
    - `totalQuestions: number`

정렬 기준: 점수 내림차순 → 정확도 내림차순 → 먼저 등록한 순
