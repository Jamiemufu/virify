import { drizzle } from "drizzle-orm/node-postgres";
// import our scheams
export const schemas = {
  user,
  listing,
};

// seed wrapper specifically for seeding - as dbo integration does not support seeding
export const db = drizzle({
  connection: process.env.DATABASE_URL!,
  casing: "snake_case",
  schema: {
    ...schemas,
  },
});
