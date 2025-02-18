import { db } from '../utils/db';
import { users } from '../db/schema/user';

export default defineEventHandler((event) => {
  // return db.$count(users);
  return db.select().from(users);
});