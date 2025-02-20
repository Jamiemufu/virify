import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prismaClient = new PrismaClient();
  // selcect all users via query bulder
  try {
    const users = await prismaClient.user.findMany();
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
