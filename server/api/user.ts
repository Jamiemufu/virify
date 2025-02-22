import { faker } from "@faker-js/faker";
import { fakeProperty, fakeListing } from "../database/prisma/fake-data";

export default defineEventHandler(async (event) => {
  const PropertyType = fakeProperty();
  const listingsType = fakeListing();

  try {
    const buildUser = await prisma.$transaction(async (prisma) => {
      // Create user with address
      const user = await prisma.user.create({
        data: {
          email: faker.internet.email(),
          password: faker.internet.password(),
          verified: false,
          createdAt: new Date(),
          address: {
            create: {
              street: faker.location.streetAddress(),
              city: faker.location.city(),
              postcode: faker.location.zipCode(),
              country: faker.location.country(),
            },
          },
        },
        include: {
          address: true,
        },
      });

      // Create properties
      const properties = await prisma.property.createMany({
        data: [
          { ...PropertyType, userId: user.id },
          { ...PropertyType, userId: user.id },
          { ...PropertyType, userId: user.id },
        ],
      });

      // Create listings
      const listings = await prisma.listing.createMany({
        data: [
          { ...listingsType, userId: user.id },
          { ...listingsType, userId: user.id },
          { ...listingsType, userId: user.id },
        ],
      });

      // Fetch created properties and listings
      const createdProperties = await prisma.property.findMany({
        where: { userId: user.id },
      });

      const createdListings = await prisma.listing.findMany({
        where: { userId: user.id },
      });

      // Link properties and listings using map
      await Promise.all(
        createdProperties.map((property, index) =>
          prisma.listing.update({
            where: { id: createdListings[index].id },
            data: { propertyId: property.id },
          })
        )
      );

      return user;
    });

    // Fetch the user with the address, properties, and listings
    const user = await prisma.user.findUnique({
      where: { id: buildUser.id },
      include: {
        address: true,
        property: true,
        listings: true,
      },
    });

    return {
      user: user,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Error creating user or listing",
      error: (error as Error).message!,
    };
  }
});