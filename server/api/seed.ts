import { faker } from "@faker-js/faker";

import {
  fakeProperty,
  fakeListing,
  fakeParking,
  fakeSecurityFeatures,
  fakeKitchenFeatures,
  fakeLivingAreaFeatures,
  fakeBathroomFeatures,
  fakeStorageFeatures,
  fakeOutdoorSpace,
  fakeAmenitiesFeature,
  fakeRunningCosts,
  fakeMedia,
  fakeBedroomFeatures,
  fakeDiningroomFeatures,
} from "../database/prisma/fake-data";

// a basic seeder that will seen user/property/listing data
export default defineEventHandler(async (event) => {
  const PropertyType = fakeProperty();
  // const listingsType = fakeListing();
  const parkingType = fakeParking();
  const secrutiyFeaturesType = fakeSecurityFeatures();
  const kitchenFeaturesType = fakeKitchenFeatures();
  const livingAreaFeaturesType = fakeLivingAreaFeatures();
  const bathroomFeaturesType = fakeBathroomFeatures();
  const storageFeaturesType = fakeStorageFeatures();
  const outdoorSpaceFeaturesType = fakeOutdoorSpace();
  const amenitiesType = fakeAmenitiesFeature();
  const runningCostsType = fakeRunningCosts();
  const mediaType = fakeMedia();
  const bedroomFeaturesType = fakeBedroomFeatures();
  const diningroomType = fakeDiningroomFeatures();

  try {
    // Create user with address
    const buildUser = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        address: {
          create: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            postcode: faker.location.zipCode(),
            country: faker.location.country(),
          },
        },
        property: {
          create: {
            ...PropertyType,
            media: {
              create: {
                ...mediaType,
              },
            },
            address: {
              create: {
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                postcode: faker.location.zipCode(),
                country: faker.location.country(),
              },
            },
            bedroomFeatures: {
              create: [{ ...bedroomFeaturesType }, { ...bedroomFeaturesType }],
            },
            livingAreaFeatures: {
              create: [{ ...livingAreaFeaturesType }, { ...livingAreaFeaturesType }],
            },
            bathroomFeatures: {
              create: [{ ...bathroomFeaturesType }, { ...bathroomFeaturesType }],
            },
            diningroomFeatures: {
              create: [{ ...diningroomType }, { ...diningroomType }],
            },
            kitchenFeatures: {
              create: {
                ...kitchenFeaturesType,
              },
            },
            outdoorSpace: {
              create: {
                ...outdoorSpaceFeaturesType,
              },
            },
            storageFeatures: {
              create: {
                ...storageFeaturesType,
              },
            },
            securityFeatures: {
              create: {
                ...secrutiyFeaturesType,
              },
            },
            parking: {
              create: {
                ...parkingType,
              },
            },
            runningCosts: {
              create: {
                ...runningCostsType,
              },
            },
            amenities: {
              create: {
                ...amenitiesType,
              },
            },
          },
        },
      },
    });

    // Fetch the user with the address, properties, and listings
    const user = await prisma.user.findUnique({
      where: { id: buildUser.id },
      include: {
        address: true,
        property: {
          include: {
            media: true,
            address: true,
            livingAreaFeatures: true,
            bathroomFeatures: true,
            kitchenFeatures: true,
            bedroomFeatures: true,
            diningroomFeatures: true,
            outdoorSpace: true,
            storageFeatures: true,
            securityFeatures: true,
            parking: true,
            runningCosts: true,
            amenities: true,
          },
        },
        listings: true,
      },
    });

    // find a property with a bathtub
    const propertyWithBathtub = await prisma.property.findFirst({
     include: {
       bathroomFeatures: true,
     },
     where: {
        bathroomFeatures: {
          some: {
            bathtub: true,
          },
        },
      },
    });

    return {
      user: user,
      propertyWithBathtub: propertyWithBathtub
    };
  } catch (error) {
    return {
      status: 500,
      message: "Error creating user or listing",
      error: (error as Error).message!,
    };
  }
});
