import type { FastifyRequest, FastifyReply } from "fastify";
import type { Product } from "../models/product.model.ts";
import { ProductRepository } from "../repositories/product.repository.ts";

const productRepository = new ProductRepository();

export const getAllProducts = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<Product[]> => {
  const products = await productRepository.getAll();
  return reply.send(products);
};
