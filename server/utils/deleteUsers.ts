import { users } from "../db/schema/user";
import { db } from "./db";

export default async function deleteUsers() {
  await db.delete(users)
}