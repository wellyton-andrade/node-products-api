import fastify from "fastify";
import formbody from "@fastify/formbody";
import { productRoutes } from "./router/product.router.js";
import fastifyCors from "@fastify/cors";

const app = fastify({ logger: true });

app.get("/", async () => {
  return { message: "API is running" };
});

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
app.register(formbody);
app.register(productRoutes, { prefix: "/api" });
let isReady = false;

export default async function handler(req: any, res: any) {
  if (!isReady) {
    await app.ready();
    isReady = true;
  }
  app.server.emit("request", req, res);
}
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  (async () => {
    if (!isReady) {
      await app.ready();
      isReady = true;
    }
    app.server.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })();
}
