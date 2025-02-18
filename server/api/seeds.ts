export default defineEventHandler(async (event) => {
  await seedUsers();
  return {
    status: 200,
    body: {
      message: "Database seeded successfully",
    },
  };
});