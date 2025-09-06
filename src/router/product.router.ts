import type { FastifyInstance } from "fastify";
import {
  createProduct,
  getAllProducts,
} from "../controllers/product.controller.ts";

export async function productRoutes(fastify: FastifyInstance) {
  fastify.get("/product", getAllProducts);
  fastify.post("/product", createProduct);
}
