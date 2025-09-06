import type { FastifyInstance } from "fastify";
import { getAllProducts } from "../controllers/product.controller.ts";

export default async function productRoutes(fastify: FastifyInstance) {
  fastify.get("/", getAllProducts);
}
