// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@scalar/nuxt', '@prisma/nuxt'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    experimental: {
      openAPI: true,
      tasks: true,
    },
    imports: {
      dirs: ['server/database/lib/*.ts'],
    },
  },
  prisma: {
    prismaRoot: './server/database',
    // prismaSchemaPath: './server/database/prisma/schema.prisma',
    skipPrompts: true,
    generateClient: true,
    installStudio: false,
  }
})
