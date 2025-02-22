import { ListingType, ListingTier, PriceType, AvailabilityStatus, PropertyType, ConstructionType, RoofConstruction, FurnishingStatus, Tenure, verificationStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeAdditionalFeatures() {
  return {
    investmentPotential: faker.lorem.words(5),
    petPolicy: faker.lorem.words(5),
    accessibilityFeatures: faker.lorem.words(5),
    moveInDate: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAdditionalFeaturesComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    investmentPotential: faker.lorem.words(5),
    petPolicy: faker.lorem.words(5),
    accessibilityFeatures: faker.lorem.words(5),
    moveInDate: faker.lorem.words(5),
    propertyId: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAddress() {
  return {
    street: faker.lorem.words(5),
    city: faker.lorem.words(5),
    postcode: faker.lorem.words(5),
    country: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAddressComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    street: faker.lorem.words(5),
    city: faker.lorem.words(5),
    postcode: faker.lorem.words(5),
    country: faker.lorem.words(5),
    userId: undefined,
    propertyId: faker.number.int(),
    agentId: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAgent() {
  return {
    name: faker.person.fullName(),
    contactInfo: faker.lorem.words(5),
    directContactOptions: faker.lorem.words(5),
    viewingAvailability: faker.lorem.words(5),
    addressId: faker.number.int(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAgentComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    name: faker.person.fullName(),
    contactInfo: faker.lorem.words(5),
    directContactOptions: faker.lorem.words(5),
    viewingAvailability: faker.lorem.words(5),
    addressId: faker.number.int(),
    propertyId: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAmenities() {
  return {
    transportLinks: faker.lorem.words(5),
    schools: faker.lorem.words(5),
    hospitals: faker.lorem.words(5),
    shopping: faker.lorem.words(5),
    greenSpaces: faker.lorem.words(5),
  };
}
export function fakeAmenitiesComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    transportLinks: faker.lorem.words(5),
    schools: faker.lorem.words(5),
    hospitals: faker.lorem.words(5),
    shopping: faker.lorem.words(5),
    greenSpaces: faker.lorem.words(5),
    propertyId: faker.number.int(),
  };
}
export function fakeBathroomFeatures() {
  return {
    enSuite: faker.datatype.boolean(),
    bathtub: faker.datatype.boolean(),
    walkInShower: faker.datatype.boolean(),
    additionalToilets: faker.datatype.boolean(),
    downstairs: faker.datatype.boolean(),
    upstairs: faker.datatype.boolean(),
  };
}
export function fakeBathroomFeaturesComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    enSuite: faker.datatype.boolean(),
    bathtub: faker.datatype.boolean(),
    walkInShower: faker.datatype.boolean(),
    additionalToilets: faker.datatype.boolean(),
    downstairs: faker.datatype.boolean(),
    upstairs: faker.datatype.boolean(),
    propertyId: faker.number.int(),
  };
}
export function fakeKitchenFeatures() {
  return {
    modern: faker.datatype.boolean(),
    openPlan: faker.datatype.boolean(),
    appliancesIncluded: faker.datatype.boolean(),
  };
}
export function fakeKitchenFeaturesComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    modern: faker.datatype.boolean(),
    openPlan: faker.datatype.boolean(),
    appliancesIncluded: faker.datatype.boolean(),
    propertyId: faker.number.int(),
  };
}
export function fakeListingCosts() {
  return {
    price: faker.number.float(),
    deposit: faker.number.float(),
    upfrontCosts: faker.number.float(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeListingCostsComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    price: faker.number.float(),
    deposit: faker.number.float(),
    upfrontCosts: faker.number.float(),
    listingId: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeListing() {
  return {
    title: faker.lorem.words(5),
    price: faker.number.float(),
    priceType: faker.helpers.arrayElement([PriceType.OFFERS_IN_EXCESS_OF, PriceType.GUIDE_PRICE, PriceType.OFFERS_IN_THE_REGION_OF, PriceType.PER_CALENDAR_MONTH, PriceType.PER_WEEK] as const),
    location: faker.lorem.words(5),
    listingType: faker.helpers.arrayElement([ListingType.FOR_SALE, ListingType.FOR_LONG_TERM_LET, ListingType.SHORT_TERM_LET, ListingType.AUCTION] as const),
    availabilityStatus: faker.helpers.arrayElement([AvailabilityStatus.AVAILABLE, AvailabilityStatus.UNDER_OFFER, AvailabilityStatus.SOLD, AvailabilityStatus.LET_AGREED] as const),
    listingTier: faker.helpers.arrayElement([ListingTier.BASIC, ListingTier.PREMIUM, ListingTier.FEATURED] as const),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeListingComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    title: faker.lorem.words(5),
    price: faker.number.float(),
    priceType: faker.helpers.arrayElement([PriceType.OFFERS_IN_EXCESS_OF, PriceType.GUIDE_PRICE, PriceType.OFFERS_IN_THE_REGION_OF, PriceType.PER_CALENDAR_MONTH, PriceType.PER_WEEK] as const),
    location: faker.lorem.words(5),
    listingType: faker.helpers.arrayElement([ListingType.FOR_SALE, ListingType.FOR_LONG_TERM_LET, ListingType.SHORT_TERM_LET, ListingType.AUCTION] as const),
    availabilityStatus: faker.helpers.arrayElement([AvailabilityStatus.AVAILABLE, AvailabilityStatus.UNDER_OFFER, AvailabilityStatus.SOLD, AvailabilityStatus.LET_AGREED] as const),
    listingTier: faker.helpers.arrayElement([ListingTier.BASIC, ListingTier.PREMIUM, ListingTier.FEATURED] as const),
    userId: faker.number.int(),
    propertyId: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeLivingAreaFeatures() {
  return {
    fireplace: faker.datatype.boolean(),
    balcony: faker.datatype.boolean(),
    openConcept: faker.datatype.boolean(),
  };
}
export function fakeLivingAreaFeaturesComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    fireplace: faker.datatype.boolean(),
    balcony: faker.datatype.boolean(),
    openConcept: faker.datatype.boolean(),
    propertyId: faker.number.int(),
  };
}
export function fakeOutdoorSpace() {
  return {
    land: faker.number.float(),
    garden: faker.number.float(),
    terrace: faker.datatype.boolean(),
    balcony: faker.datatype.boolean(),
    patio: faker.datatype.boolean(),
    separateParcel: faker.datatype.boolean(),
  };
}
export function fakeOutdoorSpaceComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    land: faker.number.float(),
    garden: faker.number.float(),
    terrace: faker.datatype.boolean(),
    balcony: faker.datatype.boolean(),
    patio: faker.datatype.boolean(),
    separateParcel: faker.datatype.boolean(),
    propertyId: faker.number.int(),
  };
}
export function fakeParking() {
  return {
    garage: faker.datatype.boolean(),
    driveway: faker.datatype.boolean(),
    permitParking: faker.datatype.boolean(),
    onStreet: faker.datatype.boolean(),
    noParking: faker.datatype.boolean(),
  };
}
export function fakeParkingComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    garage: faker.datatype.boolean(),
    driveway: faker.datatype.boolean(),
    permitParking: faker.datatype.boolean(),
    onStreet: faker.datatype.boolean(),
    noParking: faker.datatype.boolean(),
    propertyId: faker.number.int(),
  };
}
export function fakeMedia() {
  return {
    images: faker.lorem.words(5),
    videoTour: faker.lorem.words(5),
    floorPlans: faker.lorem.words(5),
  };
}
export function fakeMediaComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    images: faker.lorem.words(5),
    videoTour: faker.lorem.words(5),
    floorPlans: faker.lorem.words(5),
  };
}
export function fakeProperty() {
  return {
    propertyType: faker.helpers.arrayElement([PropertyType.HOUSE, PropertyType.TERRACED, PropertyType.SEMI_DETACHED, PropertyType.END_OF_TERRACE, PropertyType.DETACHED, PropertyType.COTTAGE, PropertyType.BUNGALOW, PropertyType.CONDO, PropertyType.PENTHOUSE, PropertyType.FLAT, PropertyType.LAND] as const),
    bedrooms: faker.number.int(),
    bathrooms: faker.number.int(),
    size: faker.number.float(),
    yearBuilt: faker.lorem.words(5),
    constructionType: faker.helpers.arrayElement([ConstructionType.STONE, ConstructionType.BRICK, ConstructionType.STANDARD] as const),
    roofConstruction: faker.helpers.arrayElement([RoofConstruction.SLATE_TILE, RoofConstruction.CONCRETE_TILE] as const),
    floorLevel: undefined,
    furnishingStatus: faker.helpers.arrayElement([FurnishingStatus.FURNISHED, FurnishingStatus.UNFURNISHED, FurnishingStatus.PART_FURNISHED] as const),
    energyRating: undefined,
    tenure: faker.helpers.arrayElement([Tenure.LEASEHOLD, Tenure.FREEHOLD] as const),
    leaseTerm: undefined,
    addressId: faker.number.int(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePropertyComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    propertyType: faker.helpers.arrayElement([PropertyType.HOUSE, PropertyType.TERRACED, PropertyType.SEMI_DETACHED, PropertyType.END_OF_TERRACE, PropertyType.DETACHED, PropertyType.COTTAGE, PropertyType.BUNGALOW, PropertyType.CONDO, PropertyType.PENTHOUSE, PropertyType.FLAT, PropertyType.LAND] as const),
    bedrooms: faker.number.int(),
    bathrooms: faker.number.int(),
    size: faker.number.float(),
    yearBuilt: faker.lorem.words(5),
    constructionType: faker.helpers.arrayElement([ConstructionType.STONE, ConstructionType.BRICK, ConstructionType.STANDARD] as const),
    roofConstruction: faker.helpers.arrayElement([RoofConstruction.SLATE_TILE, RoofConstruction.CONCRETE_TILE] as const),
    floorLevel: undefined,
    furnishingStatus: faker.helpers.arrayElement([FurnishingStatus.FURNISHED, FurnishingStatus.UNFURNISHED, FurnishingStatus.PART_FURNISHED] as const),
    energyRating: undefined,
    tenure: faker.helpers.arrayElement([Tenure.LEASEHOLD, Tenure.FREEHOLD] as const),
    leaseTerm: undefined,
    addressId: faker.number.int(),
    mediaId: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeRunningCosts() {
  return {
    councilTaxBand: faker.lorem.words(5),
    serviceCharges: faker.number.float(),
    groundRent: faker.number.float(),
  };
}
export function fakeRunningCostsComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    councilTaxBand: faker.lorem.words(5),
    serviceCharges: faker.number.float(),
    groundRent: faker.number.float(),
    propertyId: faker.number.int(),
  };
}
export function fakeSecurityFeatures() {
  return {
    gatedCommunity: faker.datatype.boolean(),
    cctv: faker.datatype.boolean(),
    alarmSystem: faker.datatype.boolean(),
    neighborhoodWatch: faker.datatype.boolean(),
  };
}
export function fakeSecurityFeaturesComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    gatedCommunity: faker.datatype.boolean(),
    cctv: faker.datatype.boolean(),
    alarmSystem: faker.datatype.boolean(),
    neighborhoodWatch: faker.datatype.boolean(),
    propertyId: faker.number.int(),
  };
}
export function fakeStorageFeatures() {
  return {
    closets: faker.datatype.boolean(),
    attic: faker.datatype.boolean(),
    basement: faker.datatype.boolean(),
    walkInWardrobe: faker.datatype.boolean(),
  };
}
export function fakeStorageFeaturesComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    closets: faker.datatype.boolean(),
    attic: faker.datatype.boolean(),
    basement: faker.datatype.boolean(),
    walkInWardrobe: faker.datatype.boolean(),
    propertyId: faker.number.int(),
  };
}
export function fakeUser() {
  return {
    email: faker.internet.email(),
    password: faker.lorem.words(5),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    verified: false,
  };
}
