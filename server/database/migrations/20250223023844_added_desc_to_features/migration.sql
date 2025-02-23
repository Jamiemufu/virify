/*
  Warnings:

  - Added the required column `description` to the `AmenitiesFeature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `BathroomFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `BedroomFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `DiningroomFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `KitchenFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ListingCosts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `LivingAreaFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `OutdoorSpace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Parking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "longitude" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "AmenitiesFeature" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BathroomFeatures" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BedroomFeatures" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DiningroomFeatures" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KitchenFeatures" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ListingCosts" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "LivingAreaFeatures" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "metadata" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OutdoorSpace" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parking" ADD COLUMN     "description" TEXT NOT NULL;
