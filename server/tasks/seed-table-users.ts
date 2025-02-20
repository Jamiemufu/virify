// http://localhost:3000/_nitro/tasks/seed-table-task?table=table
export default defineTask({
  meta: {
    name: "seed",
    description: "Seed the users table with data",
  },
  async run() {
    // return the result
    return {
      result: "Seeded",
    };
  },
});
