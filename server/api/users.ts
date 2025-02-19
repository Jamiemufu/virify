/**
 * This is an example of an API endpoint that returns all users from the database.
 * @import db
 */
export default defineEventHandler(async (event) => {
  // selcect all users via query bulder
  const users = await db.query.user.findMany();
  return {
    message: "number of users: " + users.length,
    data: users,
  };
});
