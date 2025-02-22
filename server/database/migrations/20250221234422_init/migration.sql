-- CreateEnum
CREATE TYPE "ListingType" AS ENUM ('FOR_SALE', 'FOR_LONG_TERM_LET', 'SHORT_TERM_LET', 'AUCTION');

-- CreateEnum
CREATE TYPE "ListingTier" AS ENUM ('BASIC', 'PREMIUM', 'FEATURED');

-- CreateEnum
CREATE TYPE "PriceType" AS ENUM ('OFFERS_IN_EXCESS_OF', 'GUIDE_PRICE', 'OFFERS_IN_THE_REGION_OF', 'PER_CALENDAR_MONTH', 'PER_WEEK');

-- CreateEnum
CREATE TYPE "AvailabilityStatus" AS ENUM ('AVAILABLE', 'UNDER_OFFER', 'SOLD', 'LET_AGREED');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('HOUSE', 'TERRACED', 'SEMI_DETACHED', 'END_OF_TERRACE', 'DETACHED', 'COTTAGE', 'BUNGALOW', 'CONDO', 'PENTHOUSE', 'FLAT', 'LAND');

-- CreateEnum
CREATE TYPE "ConstructionType" AS ENUM ('STONE', 'BRICK', 'STANDARD');

-- CreateEnum
CREATE TYPE "RoofConstruction" AS ENUM ('SLATE_TILE', 'CONCRETE_TILE');

-- CreateEnum
CREATE TYPE "FurnishingStatus" AS ENUM ('FURNISHED', 'UNFURNISHED', 'PART_FURNISHED');

-- CreateEnum
CREATE TYPE "Tenure" AS ENUM ('LEASEHOLD', 'FREEHOLD');

-- CreateEnum
CREATE TYPE "verificationStatus" AS ENUM ('PENDING', 'VERIFIED', 'NILL');

-- CreateTable
CREATE TABLE "AdditionalFeatures" (
    "id" SERIAL NOT NULL,
    "investmentPotential" TEXT NOT NULL,
    "petPolicy" TEXT NOT NULL,
    "accessibilityFeatures" TEXT NOT NULL,
    "moveInDate" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdditionalFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "userId" INTEGER,
    "propertyId" INTEGER NOT NULL,
    "agentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "directContactOptions" TEXT NOT NULL,
    "viewingAvailability" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,
    "propertyId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Amenities" (
    "id" SERIAL NOT NULL,
    "transportLinks" TEXT NOT NULL,
    "schools" TEXT NOT NULL,
    "hospitals" TEXT NOT NULL,
    "shopping" TEXT NOT NULL,
    "greenSpaces" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BathroomFeatures" (
    "id" SERIAL NOT NULL,
    "enSuite" BOOLEAN NOT NULL,
    "bathtub" BOOLEAN NOT NULL,
    "walkInShower" BOOLEAN NOT NULL,
    "additionalToilets" BOOLEAN NOT NULL,
    "downstairs" BOOLEAN NOT NULL,
    "upstairs" BOOLEAN NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "BathroomFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KitchenFeatures" (
    "id" SERIAL NOT NULL,
    "modern" BOOLEAN NOT NULL,
    "openPlan" BOOLEAN NOT NULL,
    "appliancesIncluded" BOOLEAN NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "KitchenFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListingCosts" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "deposit" DOUBLE PRECISION NOT NULL,
    "upfrontCosts" DOUBLE PRECISION NOT NULL,
    "listingId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ListingCosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "priceType" "PriceType" NOT NULL,
    "location" TEXT NOT NULL,
    "listingType" "ListingType" NOT NULL,
    "availabilityStatus" "AvailabilityStatus" NOT NULL,
    "listingTier" "ListingTier" NOT NULL,
    "userId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LivingAreaFeatures" (
    "id" SERIAL NOT NULL,
    "fireplace" BOOLEAN NOT NULL,
    "balcony" BOOLEAN NOT NULL,
    "openConcept" BOOLEAN NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "LivingAreaFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutdoorSpace" (
    "id" SERIAL NOT NULL,
    "land" DOUBLE PRECISION NOT NULL,
    "garden" DOUBLE PRECISION NOT NULL,
    "terrace" BOOLEAN NOT NULL,
    "balcony" BOOLEAN NOT NULL,
    "patio" BOOLEAN NOT NULL,
    "separateParcel" BOOLEAN NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "OutdoorSpace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parking" (
    "id" SERIAL NOT NULL,
    "garage" BOOLEAN NOT NULL,
    "driveway" BOOLEAN NOT NULL,
    "permitParking" BOOLEAN NOT NULL,
    "onStreet" BOOLEAN NOT NULL,
    "noParking" BOOLEAN NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "images" TEXT NOT NULL,
    "videoTour" TEXT NOT NULL,
    "floorPlans" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "propertyType" "PropertyType" NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "yearBuilt" TEXT NOT NULL,
    "constructionType" "ConstructionType" NOT NULL,
    "roofConstruction" "RoofConstruction" NOT NULL,
    "floorLevel" INTEGER,
    "furnishingStatus" "FurnishingStatus" NOT NULL,
    "energyRating" TEXT,
    "tenure" "Tenure" NOT NULL,
    "leaseTerm" INTEGER,
    "addressId" INTEGER NOT NULL,
    "mediaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RunningCosts" (
    "id" SERIAL NOT NULL,
    "councilTaxBand" TEXT NOT NULL,
    "serviceCharges" DOUBLE PRECISION NOT NULL,
    "groundRent" DOUBLE PRECISION NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "RunningCosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityFeatures" (
    "id" SERIAL NOT NULL,
    "gatedCommunity" BOOLEAN NOT NULL,
    "cctv" BOOLEAN NOT NULL,
    "alarmSystem" BOOLEAN NOT NULL,
    "neighborhoodWatch" BOOLEAN NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "SecurityFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorageFeatures" (
    "id" SERIAL NOT NULL,
    "closets" BOOLEAN NOT NULL,
    "attic" BOOLEAN NOT NULL,
    "basement" BOOLEAN NOT NULL,
    "walkInWardrobe" BOOLEAN NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "StorageFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_propertyId_key" ON "Address"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_agentId_key" ON "Address"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_propertyId_key" ON "Agent"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ListingCosts_listingId_key" ON "ListingCosts"("listingId");

-- CreateIndex
CREATE UNIQUE INDEX "RunningCosts_propertyId_key" ON "RunningCosts"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "AdditionalFeatures" ADD CONSTRAINT "AdditionalFeatures_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agent" ADD CONSTRAINT "Agent_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amenities" ADD CONSTRAINT "Amenities_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BathroomFeatures" ADD CONSTRAINT "BathroomFeatures_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KitchenFeatures" ADD CONSTRAINT "KitchenFeatures_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingCosts" ADD CONSTRAINT "ListingCosts_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivingAreaFeatures" ADD CONSTRAINT "LivingAreaFeatures_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutdoorSpace" ADD CONSTRAINT "OutdoorSpace_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parking" ADD CONSTRAINT "Parking_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RunningCosts" ADD CONSTRAINT "RunningCosts_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecurityFeatures" ADD CONSTRAINT "SecurityFeatures_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageFeatures" ADD CONSTRAINT "StorageFeatures_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
