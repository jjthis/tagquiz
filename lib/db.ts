import Database from "better-sqlite3"
import fs from "node:fs"
import path from "node:path"

const canWriteDbFile = (dbPath: string) => {
  const dir = path.dirname(dbPath)

  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    if (fs.existsSync(dbPath)) {
      fs.accessSync(dbPath, fs.constants.W_OK)
      return true
    }

    fs.writeFileSync(dbPath, "", { flag: "a" })
    return true
  } catch {
    return false
  }
}

const getDbPath = () => {
  const candidates: string[] = []

  if (process.env.SQLITE_DB_PATH) {
    candidates.push(process.env.SQLITE_DB_PATH)
  }

  // Most serverless platforms only allow writes in /tmp.
  if (process.env.VERCEL || process.env.NETLIFY || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    candidates.push(path.join("/tmp", "rankings.db"))
  }

  candidates.push(path.join(process.cwd(), "data", "rankings.db"))

  for (const candidate of candidates) {
    if (canWriteDbFile(candidate)) {
      return candidate
    }
  }

  throw new Error("No writable path found for SQLite database.")
}

declare global {
  var __sqliteDb: Database.Database | undefined
}

const initialize = (db: Database.Database) => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS rankings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nickname TEXT NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      accuracy REAL NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `)
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_rankings_score
    ON rankings(score DESC, accuracy DESC, created_at ASC);
  `)
}

export const getDb = () => {
  if (!global.__sqliteDb) {
    const dbPath = getDbPath()
    global.__sqliteDb = new Database(dbPath)
    initialize(global.__sqliteDb)
  }

  return global.__sqliteDb
}
