import { VerificationStatus, Role, PriceType, PropertyType, ListingType, AvailabilityStatus, FurnishingStatus, Tenure, OutdoorSpace, ParkingOption, Amenity, PetPolicy, Feature } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    dob: undefined,
    contact: undefined,
    updatedAt: faker.date.anytime(),
    addressId: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    role: Role.USER,
    verificationStatus: VerificationStatus.NILL,
    dob: undefined,
    contact: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    agentId: undefined,
    addressId: undefined,
  };
}
export function fakePaymentInfo() {
  return {
    cardNumber: faker.lorem.words(5),
    cardHolderName: faker.lorem.words(5),
    expiryDate: faker.date.anytime(),
    cvv: faker.number.int(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePaymentInfoComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    cardNumber: faker.lorem.words(5),
    cardHolderName: faker.lorem.words(5),
    expiryDate: faker.date.anytime(),
    cvv: faker.number.int(),
    billingAddressId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAddress() {
  return {
    addressLine1: faker.lorem.words(5),
    addressLine2: undefined,
    city: faker.lorem.words(5),
    state: faker.lorem.words(5),
    postcode: faker.lorem.words(5),
    country: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAddressComplete() {
  return {
    id: faker.string.uuid(),
    addressLine1: faker.lorem.words(5),
    addressLine2: undefined,
    city: faker.lorem.words(5),
    state: faker.lorem.words(5),
    postcode: faker.lorem.words(5),
    country: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    userId: undefined,
  };
}
export function fakeProperty() {
  return {
    title: faker.lorem.words(5),
    price: faker.number.float(),
    priceType: faker.helpers.arrayElement([PriceType.OFFERS_IN_EXCESS_OF, PriceType.GUIDE_PRICE, PriceType.OFFERS_IN_THE_REGION_OF, PriceType.PER_CALENDAR_MONTH, PriceType.PER_WEEK] as const),
    propertyType: faker.helpers.arrayElement([PropertyType.HOUSE, PropertyType.APARTMENT, PropertyType.CONDO, PropertyType.COMMERCIAL, PropertyType.LAND] as const),
    location: faker.lorem.words(5),
    listingType: faker.helpers.arrayElement([ListingType.FOR_SALE, ListingType.FOR_RENT, ListingType.SHORT_TERM_LET, ListingType.AUCTION] as const),
    availabilityStatus: faker.helpers.arrayElement([AvailabilityStatus.AVAILABLE, AvailabilityStatus.UNDER_OFFER, AvailabilityStatus.SOLD, AvailabilityStatus.LET_AGREED] as const),
    bedrooms: faker.number.int(),
    bathrooms: faker.number.int(),
    totalSize: faker.number.float(),
    yearBuilt: faker.number.int(),
    constructionType: undefined,
    roofType: undefined,
    floorLevel: undefined,
    furnishingStatus: faker.helpers.arrayElement([FurnishingStatus.FURNISHED, FurnishingStatus.UNFURNISHED, FurnishingStatus.PART_FURNISHED] as const),
    energyRating: faker.lorem.words(5),
    tenure: faker.helpers.arrayElement([Tenure.LEASEHOLD, Tenure.FREEHOLD] as const),
    leaseTerm: undefined,
    kitchenFeatures: faker.lorem.words(5).split(' '),
    livingFeatures: faker.lorem.words(5).split(' '),
    bathroomFeatures: faker.lorem.words(5).split(' '),
    storageOptions: faker.lorem.words(5).split(' '),
    outdoorSpaces: faker.helpers.arrayElement([OutdoorSpace.GARDEN, OutdoorSpace.TERRACE, OutdoorSpace.BALCONY, OutdoorSpace.PATIO, OutdoorSpace.LAND] as const),
    parkingOptions: faker.helpers.arrayElement([ParkingOption.GARAGE, ParkingOption.DRIVEWAY, ParkingOption.PERMIT_PARKING, ParkingOption.ON_STREET_PARKING] as const),
    securityFeatures: faker.lorem.words(5).split(' '),
    amenities: faker.helpers.arrayElement([Amenity.TRANSPORT_LINKS, Amenity.SCHOOLS_UNIVERSITIES, Amenity.HOSPITALS_MEDICAL, Amenity.SHOPPING_ENTERTAINMENT, Amenity.GREEN_SPACES] as const),
    councilTaxBand: undefined,
    serviceCharges: undefined,
    groundRent: undefined,
    mortgageEstimate: undefined,
    deposit: undefined,
    upfrontCosts: undefined,
    videoTour: undefined,
    floorPlan: undefined,
    investmentPotential: faker.lorem.words(5),
    petPolicy: faker.helpers.arrayElement([PetPolicy.ALLOWED, PetPolicy.NOT_ALLOWED] as const),
    accessibilityFeatures: faker.lorem.words(5).split(' '),
    moveInDate: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePropertyComplete() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    price: faker.number.float(),
    priceType: faker.helpers.arrayElement([PriceType.OFFERS_IN_EXCESS_OF, PriceType.GUIDE_PRICE, PriceType.OFFERS_IN_THE_REGION_OF, PriceType.PER_CALENDAR_MONTH, PriceType.PER_WEEK] as const),
    propertyType: faker.helpers.arrayElement([PropertyType.HOUSE, PropertyType.APARTMENT, PropertyType.CONDO, PropertyType.COMMERCIAL, PropertyType.LAND] as const),
    location: faker.lorem.words(5),
    listingType: faker.helpers.arrayElement([ListingType.FOR_SALE, ListingType.FOR_RENT, ListingType.SHORT_TERM_LET, ListingType.AUCTION] as const),
    availabilityStatus: faker.helpers.arrayElement([AvailabilityStatus.AVAILABLE, AvailabilityStatus.UNDER_OFFER, AvailabilityStatus.SOLD, AvailabilityStatus.LET_AGREED] as const),
    bedrooms: faker.number.int(),
    bathrooms: faker.number.int(),
    totalSize: faker.number.float(),
    yearBuilt: faker.number.int(),
    constructionType: undefined,
    roofType: undefined,
    floorLevel: undefined,
    furnishingStatus: faker.helpers.arrayElement([FurnishingStatus.FURNISHED, FurnishingStatus.UNFURNISHED, FurnishingStatus.PART_FURNISHED] as const),
    energyRating: faker.lorem.words(5),
    tenure: faker.helpers.arrayElement([Tenure.LEASEHOLD, Tenure.FREEHOLD] as const),
    leaseTerm: undefined,
    kitchenFeatures: faker.lorem.words(5).split(' '),
    livingFeatures: faker.lorem.words(5).split(' '),
    bathroomFeatures: faker.lorem.words(5).split(' '),
    storageOptions: faker.lorem.words(5).split(' '),
    outdoorSpaces: faker.helpers.arrayElement([OutdoorSpace.GARDEN, OutdoorSpace.TERRACE, OutdoorSpace.BALCONY, OutdoorSpace.PATIO, OutdoorSpace.LAND] as const),
    parkingOptions: faker.helpers.arrayElement([ParkingOption.GARAGE, ParkingOption.DRIVEWAY, ParkingOption.PERMIT_PARKING, ParkingOption.ON_STREET_PARKING] as const),
    securityFeatures: faker.lorem.words(5).split(' '),
    amenities: faker.helpers.arrayElement([Amenity.TRANSPORT_LINKS, Amenity.SCHOOLS_UNIVERSITIES, Amenity.HOSPITALS_MEDICAL, Amenity.SHOPPING_ENTERTAINMENT, Amenity.GREEN_SPACES] as const),
    councilTaxBand: undefined,
    serviceCharges: undefined,
    groundRent: undefined,
    mortgageEstimate: undefined,
    deposit: undefined,
    upfrontCosts: undefined,
    videoTour: undefined,
    floorPlan: undefined,
    agentId: faker.string.uuid(),
    investmentPotential: faker.lorem.words(5),
    petPolicy: faker.helpers.arrayElement([PetPolicy.ALLOWED, PetPolicy.NOT_ALLOWED] as const),
    accessibilityFeatures: faker.lorem.words(5).split(' '),
    moveInDate: faker.date.anytime(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeListing() {
  return {
    listingType: faker.helpers.arrayElement([ListingType.FOR_SALE, ListingType.FOR_RENT, ListingType.SHORT_TERM_LET, ListingType.AUCTION] as const),
    price: faker.number.float(),
    availabilityStatus: faker.helpers.arrayElement([AvailabilityStatus.AVAILABLE, AvailabilityStatus.UNDER_OFFER, AvailabilityStatus.SOLD, AvailabilityStatus.LET_AGREED] as const),
    updatedAt: faker.date.anytime(),
    description: faker.lorem.words(5),
    features: faker.helpers.arrayElement([Feature.KITCHEN_FEATURES, Feature.LIVING_AREA_FEATURES, Feature.BATHROOM_FEATURES, Feature.STORAGE_SPACE, Feature.OUTDOOR_SPACE, Feature.PARKING, Feature.SECURITY_FEATURES, Feature.AMENITIES_NEARBY] as const),
  };
}
export function fakeListingComplete() {
  return {
    id: faker.string.uuid(),
    propertyId: faker.string.uuid(),
    listingType: faker.helpers.arrayElement([ListingType.FOR_SALE, ListingType.FOR_RENT, ListingType.SHORT_TERM_LET, ListingType.AUCTION] as const),
    price: faker.number.float(),
    availabilityStatus: faker.helpers.arrayElement([AvailabilityStatus.AVAILABLE, AvailabilityStatus.UNDER_OFFER, AvailabilityStatus.SOLD, AvailabilityStatus.LET_AGREED] as const),
    agentId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    description: faker.lorem.words(5),
    features: faker.helpers.arrayElement([Feature.KITCHEN_FEATURES, Feature.LIVING_AREA_FEATURES, Feature.BATHROOM_FEATURES, Feature.STORAGE_SPACE, Feature.OUTDOOR_SPACE, Feature.PARKING, Feature.SECURITY_FEATURES, Feature.AMENITIES_NEARBY] as const),
  };
}
export function fakeImage() {
  return {
    url: faker.lorem.words(5),
  };
}
export function fakeImageComplete() {
  return {
    id: faker.string.uuid(),
    url: faker.lorem.words(5),
    propertyId: faker.string.uuid(),
  };
}
export function fakeAgent() {
  return {
    name: faker.person.fullName(),
    contact: faker.lorem.words(5),
    email: undefined,
    whatsapp: undefined,
    liveChat: undefined,
  };
}
export function fakeAgentComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    contact: faker.lorem.words(5),
    email: undefined,
    whatsapp: undefined,
    liveChat: undefined,
  };
}
