import { pgTable, integer, text } from "drizzle-orm/pg-core"

/**
 * This is a table definition for the `users` table.
 */
export const users = pgTable('users', {
  id: integer(),
  name: text(),
});

export default users;