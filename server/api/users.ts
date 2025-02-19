export default defineEventHandler(async (event) => {
  // selcect all users via query bulder
  const users = await db.query.user.findMany();
  return {
    message: "number of users: " + users.length,
    data: users,
  };
});
