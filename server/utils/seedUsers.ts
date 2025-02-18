import { seed } from "drizzle-seed";

export default async function seedUsers() {
  await seed(db, {users}, {count: 15});
}