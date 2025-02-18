export default defineEventHandler(async (event) => {
  await db.insert(users).values({name: 'John Doe', id: 1});
  return {
    status: 201,
    message: 'User created',
  }
});