// TODO: Maybe I need to split these tasks into separate files for seperate tables given the references
import { seed } from "drizzle-seed";


// http://localhost:3000/_nitro/tasks/seed-table-task?table=table
export default defineTask({
  meta: {
    name: "seed",
    description: "Seed the users table with data",
  },
  /**
   * Task Runner
   * @param param0 table: string
   * @param param1 count: number
   * @import db
   */
  async run() {
    // seed the table
    await seed(db, {users, properties, propertyDetails, propertyFeatures}).refine((f) => ({
      users: {
        count: 10,
        with: {
          properties: 10,
        },
      },
      properties: {
        count: 1,
        with: {
          propertyDetails: 1,
          propertyFeatures: 1,
        },
      }
    }));
    // return the result
    return {
      result: "Users table seeded",
    };
  },
});
