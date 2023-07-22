import {
    integer,
    text,
    sqliteTable,
} from "drizzle-orm/sqlite-core"

export const postsTable = sqliteTable("posts", {
    id: integer("id").primaryKey(),
    content: text("content").notNull(),
    created: text("created_at"),
})