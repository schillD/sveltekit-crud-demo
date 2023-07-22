import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';

const sqlite = new Database(DB_PATH, { verbose: console.log });
export const db: BetterSQLite3Database = drizzle(sqlite);
