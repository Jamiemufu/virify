import seedData from "../utils/seed";

export default defineEventHandler(async (event) => {
  await seedData();
  return {
    status: 200,
    body: {
      message: "Database seeded successfully",
    },
  };
});