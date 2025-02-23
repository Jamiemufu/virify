export default defineEventHandler(async (event) => {
  // get the post data
  const { email, password } = await readBody(event)
  const { street, city, postcode, country } = await readBody(event)

  const user = await prisma.user.create({
    data: {
      email,
      password,
      address: {
        create: {
          street,
          city,
          postcode,
          country,
        },
      },
    },
    include: {
      address: true,
    },
  });

  return {
    status: 201,
    message: "User created",
    data: user,
  };
});