import type { FastifyInstance } from "fastify";

export default async function routes(fastify: FastifyInstance) {
  fastify.get("/helloworld", async () => {
    return { hello: "world" };
  });
}
