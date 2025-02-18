import { createDatabase } from 'db0';
import { drizzle as seedDrizzle } from 'drizzle-orm/node-postgres';
import { drizzle } from "db0/integrations/drizzle";
import postgresql from 'db0/connectors/postgresql';


// dbo connector
export const dbConn = createDatabase(postgresql({
  url: process.env.DATABASE_URL!,
}));

// dbo drizzle wrapper
export const db = drizzle(dbConn);

// seed wrapper specifically for seeding - as dbo integration does not support seeding
export const seedConn = seedDrizzle({
  connection: process.env.DATABASE_URL!, 
  casing: 'snake_case'
});