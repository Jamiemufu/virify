import { db } from "../utils/db";
import { seed } from "drizzle-seed";

import { users } from "../db/schema/user";

export default async function seedData() {
  await seed(db, {users}, {count: 100});
}