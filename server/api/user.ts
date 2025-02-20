export default defineEventHandler(async (event) => {
 
  // selcect all users via query bulder
  try {
    const users = await prisma.user.findMany({
      include: {
        address: true
      }
    });
    return {
      users: users,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Error fetching data",
      error: (error as Error).message!,
    };
  }
});
