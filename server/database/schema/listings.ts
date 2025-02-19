import { pgTable, integer, text } from "drizzle-orm/pg-core"

/**
 * This is a table definition for the `listings` table.
 */
export const listings = pgTable('listings', {
  id: integer(),
  name: text(),
});