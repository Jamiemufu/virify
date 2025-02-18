export default defineEventHandler((event) => {
  return db.select().from(users);
});