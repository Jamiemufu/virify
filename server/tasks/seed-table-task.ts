import { seed } from "drizzle-seed";
import stringToSchema from "../utils/string-to-schema";

// http://localhost:3000/_nitro/tasks/seed-table-task?table=table
export default defineTask({
  meta: {
    name: "seed",
    description: "Seed the database with some random data",
  },
  /**
   * Task Runner
   * @param param0 table: string
   */
  async run({ payload }) {
    const { table, count } = payload;
    // seed requires a schema object, so we need to create one for each table we have
    const tableToSeed = stringToSchema(table as string);
    // seed the table
    await seed(db, { tableToSeed }, { count: count as number });
    // return the result
    return {
      result: count + " number of rows added to table: " + table,
    };
  },
});
