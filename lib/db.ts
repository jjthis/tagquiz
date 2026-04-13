import Database from "better-sqlite3"
import fs from "node:fs"
import path from "node:path"

const getDbPath = () => {
  if (process.env.SQLITE_DB_PATH) {
    return process.env.SQLITE_DB_PATH
  }

  // Serverless hosts usually allow write access only under /tmp.
  if (process.env.VERCEL) {
    return path.join("/tmp", "rankings.db")
  }

  return path.join(process.cwd(), "data", "rankings.db")
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
    const dataDir = path.dirname(dbPath)

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    global.__sqliteDb = new Database(dbPath)
    initialize(global.__sqliteDb)
  }

  return global.__sqliteDb
}
