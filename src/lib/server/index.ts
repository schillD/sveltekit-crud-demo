import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';


const sqlite = new Database("src/data/db.db", { verbose: console.log });
export const db: BetterSQLite3Database = drizzle(sqlite);
