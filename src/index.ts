import app from "./app.ts";
import { productRoutes } from "./router/product.router.ts";

const port = 3000;
app.register(productRoutes, { prefix: "/api/" });

app
  .listen({ port })
  .then(() => {
    console.log(`Server running on port ${port}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
