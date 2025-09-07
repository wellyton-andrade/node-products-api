import app from "./app.ts";
import { productRoutes } from "./router/product.router.ts";
import formbody from "@fastify/formbody";
const port = 3000;
app.register(productRoutes, { prefix: "/api/" });
app.register(formbody);

app
  .listen({ port })
  .then(() => {
    console.log(`Server running on port ${port}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
