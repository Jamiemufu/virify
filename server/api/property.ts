export default defineEventHandler(async (event) => {
  // selcect all users via query bulder
  try {
    const propertyData = await prisma.property.findMany({
      include: {
        agent: true,
        listing: true,
      },
    });
    return {
      message: "number of [properties: ]" + propertyData.length,
      data: propertyData,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Error fetching data",
      error: (error as Error).message!,
    };
  }
});
