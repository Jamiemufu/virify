import { sql, Table } from "drizzle-orm";

export default defineTask({
  meta: {
    name: "Drop Table",
    description: "Drop Tables",
  },
  async run() {
    // loop the tables as Table and drop them
    for (const schema of Object.values(schemas) as Table[]) {
      if (schema instanceof Table) {
        await db.execute(sql`DROP TABLE IF EXISTS ${schema} CASCADE;`);
      }
    }
    return {
      result: "Tables dropped",
    };
  },
});
