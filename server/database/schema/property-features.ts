import { integer, pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { properties } from './properties'
import { relations } from "drizzle-orm";

export const propertyFeatures = pgTable('property_features', {
  propertyFeaturesId: integer('property_features_id').primaryKey().generatedAlwaysAsIdentity().notNull(),
  propertyId: integer('property_id').references(() => properties.propertyId),
  kitchenFeatures: text('kitchen_features'),
  livingAreaFeatures: text('living_area_features'),
  bathroomFeatures: text('bathroom_features'),
  storageSpace: text('storage_space'),
  outDoorSpace: text('outdoor_space'),
  parking: boolean('garage'),
  security: text('security'),
  createAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const propertyFeaturesPropertiesRelation = relations(propertyFeatures, ({ one }) => ({
  properties: one(properties)
}));