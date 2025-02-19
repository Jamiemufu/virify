import { getTableConfig, PgTableWithColumns } from "drizzle-orm/pg-core";

/**
 * Convert a string to a schema object
 * @param table string
 * @returns PgTableWithColumns<any>
 */
export default function stringToSchema(table: string): PgTableWithColumns<any> {
  // import the schemas
  const schemas = {
    user,
    listing,
  };
  // the table we want to seed
  let tableToSeed: PgTableWithColumns<any> | null = null;
  // we loop through all the schemas to find a schema that matches the table string
  for (const schema of Object.values(schemas)) {
    if (table === getTableConfig(schema).name) {
      tableToSeed = schema as PgTableWithColumns<any>;
    }
  }
  // error if no matching table found
  if (tableToSeed === null) {
    throw new Error(`Table ${table} not found`);
  }

  return tableToSeed
}
