import { decimal, integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { propertyDetails } from './property-details';

// Create an enum for account type
export const propertyType = pgEnum("property-type", ["House", "Apartment", "Flat", "Commercial", "Land", "Other", "Condo", "Room"]);
export const listingType = pgEnum("listing-type", ["Sale", "Rent"]);
export const availabilityStatus = pgEnum("availability-status", ["Available", "Sold", "Rented"]);

/**
 * This is a table definition for the `properties` table.
 */
export const properties = pgTable("properties", {
  propertyId: integer("property-id").primaryKey().generatedAlwaysAsIdentity().notNull(),
  userId: integer("user-id").references(() => users.userId),
  title: text("title").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  propertyType: propertyType("property-type").default("House").notNull(),
  location: text("location").notNull(),
  listingType: listingType("listing-type").notNull(),
  availabilityStatus: availabilityStatus("availability-status").default("Available").notNull(),
});

export const propertyUserRelation = relations(properties, ({ one }) => ({
	user: one(users, { fields: [properties.userId], references: [users.userId] }),
}));

export const propertyDetailsRelation = relations(properties, ({ one }) => ({
  propertyDetails: one(propertyDetails)
}));