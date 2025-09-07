import type { FastifyInstance } from "fastify";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.ts";

export async function productRoutes(fastify: FastifyInstance) {
  fastify.get("/product", getAllProducts);
  fastify.post("/product", createProduct);
  fastify.get("/product/:id", getProductById);
  fastify.delete("product/:id", deleteProduct);
}
