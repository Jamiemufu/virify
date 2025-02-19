// http://localhost:3000/_nitro/tasks/resetTableTask?table=user
export default defineTask({
  meta: {
    name: "resetTableTask",
    description: "Reset the table",
  },
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
