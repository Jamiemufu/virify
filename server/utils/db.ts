import { drizzle } from "drizzle-orm/node-postgres";

// TODO ADD EACH NEW SCHEMA HERE INCLUDING RELATIONSIPS
export const schemas = {
  users,
  properties,
  propertyDetails,
  listings,
  userPropertyRelation,
  propertyUserRelation,
  propertyDetailsRelation,
  propertyPropertyDetailsRelation,
  propertyFeatures,
  propertyFeaturesPropertiesRelation,
  propertyFeatureRelation,
}

// seed wrapper specifically for seeding - as dbo integration does not support seeding
export const db = drizzle({
  connection: process.env.DATABASE_URL!,
  schema: {
    ...schemas,
  },
});
