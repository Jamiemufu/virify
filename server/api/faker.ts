import { faker } from '@faker-js/faker';


export default defineEventHandler(async (event) => {
  
  async function main() {
    console.log("🌱 Seeding database...");
  
    // Create fake users
    const users = await Promise.all(
      Array.from({ length: 10 }).map(() =>
        prisma.user.create({
          data: {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            dob: faker.date.birthdate(),
            contact: faker.phone.number(),
            role: "USER",
            verificationStatus: "PENDING",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        })
      )
    );
  
    // Create fake addresses
    const addresses = await Promise.all(
      users.map((user) =>
        prisma.address.create({
          data: {
            addressLine1: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            postcode: faker.location.zipCode(),
            country: faker.location.country(),
            userId: user.id,
          },
        })
      )
    );
  
    // Create fake agents
    const agents = await Promise.all(
      Array.from({ length: 5 }).map(() =>
        prisma.agent.create({
          data: {
            name: faker.person.fullName(),
            contact: faker.phone.number(),
            whatsapp: faker.phone.number(),
          },
        })
      )
    );
  
    // Create fake properties
    const properties = await Promise.all(
      Array.from({ length: 10 }).map(() =>
        prisma.property.create({
          data: {
            title: faker.lorem.words(3),
            price: faker.number.float({ min: 100000, max: 1000000 }),
            location: faker.location.city(),
            bedrooms: faker.number.int({ min: 1, max: 5 }),
            bathrooms: faker.number.int({ min: 1, max: 3 }),
            totalSize: faker.number.float({ min: 500, max: 5000 }),
            yearBuilt: faker.number.int({ min: 1950, max: 2023 }),
            agentId: agents[Math.floor(Math.random() * agents.length)].id,
            energyRating: faker.string.alpha({ length: 1, casing: 'upper' }),
            investmentPotential: faker.lorem.word(),
            moveInDate: faker.date.future(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        })
      )
    );
  
    // Create fake listings
    await Promise.all(
      properties.map((property) =>
        prisma.listing.create({
          data: {
            propertyId: property.id,
            price: property.price,
            description: faker.lorem.paragraph(),
            agentId: property.agentId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        })
      )
    );
  
    console.log("✅ Seeding complete!");
  }
  
  main()
    .catch((e) => console.error(e))
    .finally(async () => {
      await prisma.$disconnect();
    });
  

  return {
    statusCode: 200,
    body: "Database seeded successfully",
  }
});