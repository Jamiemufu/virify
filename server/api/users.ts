export default defineEventHandler(async (event) => {
  const user = await db.select().from(users).all();

  return {
    message: 'number of users: ' + user.length,
    data: user,
  }
  
});