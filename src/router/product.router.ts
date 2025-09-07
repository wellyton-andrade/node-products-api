import type { FastifyInstance } from "fastify";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";

export async function productRoutes(fastify: FastifyInstance) {
  fastify.get("/product", getAllProducts);
  fastify.post("/product", createProduct);
  fastify.get("/product/:id", getProductById);
  fastify.delete("/product/:id", deleteProduct);
  fastify.patch("/product/:id", updateProduct);
}
