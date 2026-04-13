import Database from "better-sqlite3"
import fs from "node:fs"
import path from "node:path"

const dataDir = path.join(process.cwd(), "data")
const dbPath = path.join(dataDir, "rankings.db")

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
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    global.__sqliteDb = new Database(dbPath)
    initialize(global.__sqliteDb)
  }

  return global.__sqliteDb
}
