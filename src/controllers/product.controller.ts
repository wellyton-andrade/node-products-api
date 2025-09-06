import type { FastifyRequest, FastifyReply } from "fastify";
import type { Product } from "../models/product.model.ts";

export const getAllProducts = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<Product[]> => {
  const produtos: Product[] = [
    {
      id: 1,
      name: "Produto A",
      price: 29.99,
      stock: 100,
      description: "Descrição do Produto A",
      imageUrl: "http://example.com/produto-a.jpg",
    },
    {
      id: 2,
      name: "Produto B",
      price: 49.99,
      stock: 50,
      description: "Descrição do Produto B",
      imageUrl: "http://example.com/produto-b.jpg",
    },
  ];
  return reply.send(produtos);
};
