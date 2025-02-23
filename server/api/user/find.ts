export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  try {
    const user = prisma.user.findUnique({
      where: { id: id },
      include: {
        address: true,
      }
    });
    return {
      status: 200,
      data: user,
    };  
  }
  catch (error) {
    return {
      status: 500,
      message: "Error fetching data",
      error: (error as Error).message!,
    };
  }
});