/**
 * This is an example of an API endpoint that returns all users from the database.
 * @import db
 */

export default defineEventHandler(async (event) => {
  // selcect all users via query bulder
  const propertyData = await db.query.users.findMany({
    with: {
      properties: {
        with: {
          propertyDetails: true,
        }
      }
    }
  });

  return {
    message: "number of users: " + propertyData.length,
    data: propertyData,
  };
});
