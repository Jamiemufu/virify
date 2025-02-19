import { decimal, integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { propertyDetails } from './property-details';
import { propertyFeatures } from "./property-features";

// Create an enum for account type
export const propertyType = pgEnum("property_type", ["House", "Apartment", "Flat", "Commercial", "Land", "Other", "Condo", "Room"]);
export const listingType = pgEnum("listing_type", ["Sale", "Rent"]);
export const availabilityStatus = pgEnum("availability_status", ["Available", "Sold", "Rented"]);

/**
 * This is a table definition for the `properties` table.
 */
export const properties = pgTable("properties", {
  propertyId: integer("property_id").primaryKey().generatedAlwaysAsIdentity().notNull(),
  userId: integer("user_id").references(() => users.userId),
  title: text("title").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  propertyType: propertyType("property_type").default("House").notNull(),
  location: text("location").notNull(),
  listingType: listingType("listing_type").notNull(),
  availabilityStatus: availabilityStatus("availability_status").default("Available").notNull(),
});

export const propertyUserRelation = relations(properties, ({ one }) => ({
  user: one(users, { fields: [properties.userId], references: [users.userId] }),
}));

export const propertyDetailsRelation = relations(properties, ({ one }) => ({
  propertyDetails: one(propertyDetails)
}));

export const propertyFeatureRelation = relations(properties, ({ one }) => ({
  propertyFeatures: one(propertyFeatures, { fields: [properties.propertyId], references: [propertyFeatures.propertyId]})
}));