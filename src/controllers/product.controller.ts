import type { FastifyRequest, FastifyReply } from "fastify";
import type { Product } from "../models/product.model.ts";
import { ProductRepository } from "../repositories/product.repository.ts";

const productRepository = new ProductRepository();

export const getAllProducts = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<Product[]> => {
  const products = await productRepository.getAll();
  return products;
};

export const createProduct = async (
  request: FastifyRequest<{ Body: Product }>,
  reply: FastifyReply
): Promise<Product> => {
  const product = request.body as Product;

  const newProduct = await productRepository.create(product);
  reply.code(201);
  return newProduct;
};

export const getById = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
): Promise<Product | null> => {
  const { id } = request.params;
  const findId = await productRepository.getById(id);
  return findId;
};
