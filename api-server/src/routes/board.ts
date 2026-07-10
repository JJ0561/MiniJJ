import path from "path";
import fs from "fs";
import { Router, type IRouter } from "express";
import Database from "better-sqlite3";

const router: IRouter = Router();

// orion_memory.db lives at the workspace root.
// process.cwd() inside the api-server package is artifacts/api-server/,
// so we go up two levels to reach the workspace root.
const DB_PATH = path.resolve(process.cwd(), "..", "..", "orion_memory.db");

router.get("/board", (_req, res) => {
  if (!fs.existsSync(DB_PATH)) {
    // DB hasn't been created yet (no board posts have been made)
    res.json([]);
    return;
  }

  try {
    const db = new Database(DB_PATH, { readonly: true });
    const rows = db
      .prepare(
        "SELECT id, author, message, timestamp FROM family_board ORDER BY timestamp DESC LIMIT 50"
      )
      .all() as { id: number; author: string; message: string; timestamp: string }[];
    db.close();
    res.json(rows);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    res.status(500).json({ error: message });
  }
});

export default router;
