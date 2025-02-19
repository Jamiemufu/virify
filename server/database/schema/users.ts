import { relations, SQL, sql } from "drizzle-orm";
import { pgTable, integer, text, pgEnum, uniqueIndex, AnyPgColumn, timestamp, decimal} from "drizzle-orm/pg-core"
import { properties } from './properties';

// create an enum for account type
export const accountType = pgEnum('account-type', ['Business', 'Individual']);

/**
 * This is a table definition for the `users` table.
 */
export const users = pgTable('users', {
  userId: integer('user-id').primaryKey().generatedAlwaysAsIdentity().notNull(),
  usernamee: text('username').notNull(),
  firstNames: text('firstname').notNull(),
  lastName: text('lastname').notNull(),
  passwordHash: text('password-hash').notNull(),
  email: text('email').unique().notNull(),
  accountType: accountType('account-type').default("Individual"),
  createAt: timestamp('created-at').notNull(),
  updatedAt:timestamp('updated-at').notNull(),
},
// create index on email column
(table) => [
  uniqueIndex('emailUniqueIndex').on(lowerEmail(table.email)),
]);

export const userPropertyRelation = relations(users, ({ one }) => ({
	properties: one(properties),
}));

/**
 * get the email in lowercase
 * access: .where(eq(lower(users.email), email.toLowerCase()));
 * @param email lowercase email
 * @returns email in lowercase
 */
export const lowerEmail = function lower(email: AnyPgColumn): SQL {
  return sql`lower(${email})`;
}





