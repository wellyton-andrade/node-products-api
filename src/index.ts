import app from "./app.ts";

const port = 3000;

app
  .listen({ port })
  .then(() => {
    console.log(`Server running on port ${port}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
