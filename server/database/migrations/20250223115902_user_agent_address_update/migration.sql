/*
  Warnings:

  - The values [TERRACED,SEMI_DETACHED,END_OF_TERRACE,DETACHED] on the enum `PropertyType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `agentId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `ListingCosts` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `energyRating` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Property` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `accessibilityFeatures` on the `AdditionalFeatures` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `addressLine1` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLine2` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `county` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postcode` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyClassification` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `epc` to the `RunningCosts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLine1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `county` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postcode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "accessibilityFeaturesType" AS ENUM ('WHEELCHAIR_ACCESSIBLE', 'WHEELCHAIR_RAMP', 'ELEVATOR', 'STAIRS', 'PARKING', 'OTHER');

-- CreateEnum
CREATE TYPE "petPolicyType" AS ENUM ('ALLOWED', 'NOT_ALLOWED');

-- CreateEnum
CREATE TYPE "propertyClassification" AS ENUM ('SEMI_DETACHED', 'END_OF_TERRACE', 'DETACHED', 'TERRACED', 'NON_WORKING_FARM', 'WORKING_FARM');

-- CreateEnum
CREATE TYPE "epcType" AS ENUM ('A', 'B', 'C', 'D', 'E', 'F', 'G');

-- AlterEnum
BEGIN;
CREATE TYPE "PropertyType_new" AS ENUM ('HOUSE', 'COTTAGE', 'BUNGALOW', 'CONDO', 'PENTHOUSE', 'FLAT', 'LAND', 'NEW_BUILD', 'SHARED_OWNERSHIP', 'RETIREMENT', 'STUDENT');
ALTER TABLE "Property" ALTER COLUMN "propertyType" TYPE "PropertyType_new" USING ("propertyType"::text::"PropertyType_new");
ALTER TYPE "PropertyType" RENAME TO "PropertyType_old";
ALTER TYPE "PropertyType_new" RENAME TO "PropertyType";
DROP TYPE "PropertyType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_agentId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropIndex
DROP INDEX "Address_agentId_key";

-- DropIndex
DROP INDEX "Address_userId_key";

-- AlterTable
ALTER TABLE "AdditionalFeatures" DROP COLUMN "accessibilityFeatures",
ADD COLUMN     "accessibilityFeatures" "accessibilityFeaturesType" NOT NULL;

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "agentId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "addressLine1" TEXT NOT NULL,
ADD COLUMN     "addressLine2" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "county" TEXT NOT NULL,
ADD COLUMN     "postcode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "location";

-- AlterTable
ALTER TABLE "ListingCosts" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "description",
DROP COLUMN "energyRating",
DROP COLUMN "title",
ADD COLUMN     "propertyClassification" "propertyClassification" NOT NULL,
ADD COLUMN     "propertyValue" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "RunningCosts" ADD COLUMN     "epc" "epcType" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "addressLine1" TEXT NOT NULL,
ADD COLUMN     "addressLine2" TEXT,
ADD COLUMN     "agentId" INTEGER,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "county" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "postcode" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
