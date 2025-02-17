import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: 'server/db/schema/user.ts',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  out: './drizzle',
});