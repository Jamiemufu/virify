export default defineTask({
  meta: {
    name: "Drop Table",
    description: "Drop Tables",
  },
  async run() {
    return {
      result: "Tables dropped",
    };
  },
});
