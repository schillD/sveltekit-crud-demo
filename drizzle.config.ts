import type { Config } from "drizzle-kit";
 
export default {
  schema: "src/lib/server/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: 'src/data/db.db',
  }
} satisfies Config;