import { relations } from "drizzle-orm";
import { pgTable, integer, text, timestamp, decimal} from "drizzle-orm/pg-core"
import { properties } from "./properties";

export const propertyDetails = pgTable('property-details', {
  propertyDetailsId: integer('property-details-id').primaryKey().generatedAlwaysAsIdentity().notNull(),
  propertyId:  integer('property-id').references(() => properties.propertyId),
  bedrooms: integer('bedrooms').notNull(),
  bathrooms: integer('bathrooms').notNull(),
  totalSize: decimal('total-size', { precision: 10, scale: 2 }).notNull(),
  yearBuilt: integer('year-built').notNull(),
  constructionType: text('contruction-type'),
  roofConstruction: text('roof-construction'),
  floorLevel: integer('floor-level'),
  furnishingStatus: text('furnishing-status'),
  energyEfficiencyRating: text('energy-efficiency-rating'), 
  tenure: text('tenure'),
  leaseTermYears: integer('lease-term'),
  createAt: timestamp('created-at').notNull(),
  updatedAt:timestamp('updated-at').notNull(),
});

export const propertyPropertyDetailsRelation = relations(propertyDetails, ({ one }) => ({
  property: one(properties, { fields: [propertyDetails.propertyId], references: [properties.propertyId] }),
}));