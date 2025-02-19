// http://localhost:3000/_nitro/tasks/reset-table-task?table=user
export default defineTask({
  meta: {
    name: "Rest table task",
    description: "Reset the table",
  },
  /**
   * Task Runner
   * @param param0 table: string
   * @import db
   */
  async run({ payload }) {
    const { table } = payload;
    // seed requires a schema object, so we need to create one for each table we have
    const tableToReset = stringToSchema(table as string);
    // delete the table
    await db.delete(tableToReset!);
    // return the result
    return {
      result: table + " table reset",
    };
  },
});
