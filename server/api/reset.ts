export default defineEventHandler(async (event) => {
  await deleteUsers();
  return {
    status: 200,
    body: {
      message: "Users Deleted",
    },
  };
});