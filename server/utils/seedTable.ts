import { seed } from "drizzle-seed";

export default async function seedTable(table: any) {
  if (!table) {
    throw new Error("Table name is required");
  }
  await seed(db, {table}, {count: 15});
}