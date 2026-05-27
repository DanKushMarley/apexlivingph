import postgres from "postgres";

const globalForDb = globalThis as unknown as {
  sql: ReturnType<typeof postgres> | undefined;
};

const sql =
  globalForDb.sql ??
  postgres(process.env.DATABASE_URL!, {
    ssl: "require",
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.sql = sql;
}

export default sql;