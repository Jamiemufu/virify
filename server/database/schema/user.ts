import { pgTable, integer, text } from "drizzle-orm/pg-core"

/**
 * This is a table definition for the `users` table.
 */
export const user = pgTable('user', {
  id: integer(),
  name: text(),
});

export default user;
