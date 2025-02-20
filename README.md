# Virify API

## Nuxt Server

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev

```

### Production

Build the application for production:

```bash
# pnpm
pnpm build

```

Locally preview production build:

```bash
# pnpm
pnpm preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information

## Prisma

We are using postgresql for our database. Before moving ahead with running migrations etc, you need to have postgresql installed (brew, linux, windows - does not matter)

### Install Postgres

#### MacOS

Install via homebrew - and follow instructions in terminal

```bash
brew install postgresql
```

#### Windows / WSL

Install postgres via Ubnuntu:

```bash
sudo apt-get install postgresql
```

Start the service:

```bash
sudo service postgresql start
```

#### Create user and database

Create a new user and database:

```bash
sudo -u postgres psql postgres
create role NAME with password 'PASSWORD' superuser login;
create database DATABASE_NAME;
```

You now have created a database and user ready for Prisma.

#### Add connection url

You connect to the database in Prisma via connectionUrl. This is in project root `./env`

`DATABASE_URL="postgres://USER@PASSWORDlocalhost:5432/DATABASENAME"`

Now Prisma can connect to the database

### CLI and Migrations

Check our the migrations fundementals [here](https://www.prisma.io/docs/orm/prisma-migrate/getting-started)

### Run Migrations

```bash
pnpm migrations-run
```

### Create a migration

When you make any changes to the database and structure, create a new migration

```bash
pnpm migrations-run --name NEW_MIGRATION_NAME
```

### Schemaa

Schemas are models that are used to map tables and columns. The schemas can be located here: `./server/prisma/`.

**note**: They are auto imported and loaded via Prisma

### Prisma Client

Prisma as a ORM generates a client very specific to your schemas, before you make queries you need to generate a new client if there have been any changes to your model/schema.

```bash
pnpm prisma-generate
```

Once generated the client becomes available globally. This is auto-imported into your nuxt application so call it by `prisma`

```typescript
const users = await prisma.user.findMany();
```

### Prisma Studio

Prisma offer visual application [here](https://github.com/prisma/studio)

This is disabled on build due to changes to our structure but you can run it by:

```bash
pnpm pnpm prisma-studio
```
