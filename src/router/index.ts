import type { FastifyInstance } from "fastify";
import productRoutes from "./product.router.ts";

export default async function routes(fastify: FastifyInstance) {
  fastify.get("/helloworld", async () => {
    return { hello: "world" };
  });

  fastify.register(productRoutes, { prefix: "/product" });
}
