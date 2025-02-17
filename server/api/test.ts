import { drizzle } from 'drizzle-orm/node-postgres';
import { users } from '../db/schema/user';

/**
 * This is a test endpoint that counts the number of users in the database.
 */
export default defineEventHandler((event) => {
  const db = drizzle(process.env.DATABASE_URL!);
  return db.$count(users);
});
