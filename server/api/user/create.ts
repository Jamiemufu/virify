export default defineEventHandler(async (event) => {
  // get the post data
  const formData = await readBody(event)
  // create a new user
  const user = await prisma.user.create({
    data: {
     firstName: formData.firstName as string,
     lastName: formData.lastName as string,
     username: formData.username as string,
     email: formData.email as string,
     password: formData.password as string,
     addressLine1: formData.addressLine1 as string,
     addressLine2: formData.addressLine2 as string,
     city: formData.city as string,
     county: formData.county as string,
     postcode: formData.postcode as string,
     country: formData.country as string,
    },
  });

  return {
    status: 201,
    message: "User created",
    data: user,
  };
});