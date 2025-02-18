export default defineEventHandler(async (event) => {
  // get table query
  const { table } = getQuery(event);
  try {
    await seedTable(table);
  } catch (err) {
    return {
      status: 500,
      body: {
        message: (err as Error).message,
      },
    };
  }
  return {
    status: 200,
    body: {
      message: "Database seeded successfully",
    },
  };
});