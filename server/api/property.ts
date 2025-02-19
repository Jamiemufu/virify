export default defineEventHandler(async (event) => {
  // selcect all users via query bulder
  try {
    const propertyData = await db.query.users.findMany({
      with: {
        properties: {
          with: {
            propertyDetails: true,
            propertyFeatures: true,
          },
        },
      },
    });
    return {
      message: "number of users: " + propertyData.length,
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
