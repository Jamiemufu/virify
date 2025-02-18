import { db } from '../utils/db';
import { users } from '../db/schema/user';

export default defineEventHandler((event) => {
  return db.select().from(users)
});