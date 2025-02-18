export default defineEventHandler(async (event) => {
  const user = await db.select().from(users);
  const numberOfUsers =  await db.$count(users);

  return {
    message: 'number of users: ' + numberOfUsers,
    data: user,
  }
  
});