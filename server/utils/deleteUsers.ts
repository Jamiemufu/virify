export default async function deleteUsers() {
  await db.delete(users)
}