export default defineEventHandler(async (event) => {
  // selcect all users via query bulder
  // const user = await db.query.users.findMany();
  // const user = await db.query(usersSchema).findMany();
  const user = await db.query.users.findMany();

  return {
    message: 'number of users: ' + user.length,
    data: user,
  }
  
});