import { relations } from "drizzle-orm";
import { pgTable, integer, text, timestamp, decimal } from "drizzle-orm/pg-core";
import { properties } from "./properties";

export const propertyDetails = pgTable('property_details', {
  propertyDetailsId: integer('property_details_id').primaryKey().generatedAlwaysAsIdentity().notNull(),
  propertyId: integer('property_id').references(() => properties.propertyId),
  bedrooms: integer('bedrooms').notNull(),
  bathrooms: integer('bathrooms').notNull(),
  totalSize: decimal('total_size', { precision: 10, scale: 2 }).notNull(),
  yearBuilt: integer('year_built').notNull(),
  constructionType: text('construction_type'),
  roofConstruction: text('roof_construction'),
  floorLevel: integer('floor_level'),
  furnishingStatus: text('furnishing_status'),
  energyEfficiencyRating: text('energy_efficiency_rating'), 
  tenure: text('tenure'),
  leaseTermYears: integer('lease_term'),
  createAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const propertyPropertyDetailsRelation = relations(propertyDetails, ({ one }) => ({
properties: one(properties, { fields: [propertyDetails.propertyId], references: [properties.propertyId] }),
}));