import { decimal, integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { propertyDetails } from './property-details';
import { propertyFeatures } from "./property-features";

// Create an enum for account type
export const propertyType = pgEnum("property_type", ["House", "Apartment", "Flat", "Land", "Other", "Houseshare"]);
export const listingType = pgEnum("listing_type", ["Sale", "Rent"]);
export const availabilityStatus = pgEnum("availability_status", ["Available", "Sold", "Rented"]);

/**
 * This is a table definition for the `properties` table.
 */
export const properties = pgTable("properties", {
  propertyId: integer("property_id").primaryKey().generatedAlwaysAsIdentity().notNull(),
  userId: integer("user_id").references(() => users.userId),
  title: text("title").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }),
  offerPrice: decimal("offer_price", { precision: 10, scale: 2 }),
  guidePrice: decimal("guide_price", { precision: 10, scale: 2 }),
  offerInExcessPrice: decimal("offer_in_excess", { precision: 10, scale: 2 }),
  pcm: decimal("pcm", { precision: 10, scale: 2 }),
  deposit: decimal("deposit", { precision: 10, scale: 2 }),
  holdingDeposit: decimal("holding_deposit", { precision: 10, scale: 2 }),
  propertyType: propertyType("property_type").notNull(),
  postcode: text("location").notNull(),
  addressLine1: text("address_line1").notNull(),
  addressLine2: text("address_line2"),
  city: text("city").notNull(),
  county: text("county").notNull(),
  country: text("country").notNull(),
  listingType: listingType("listing_type").notNull(),
  availabilityStatus: availabilityStatus("availability_status").default("Available").notNull(),
  minTerm: integer("min_term").default(6),
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