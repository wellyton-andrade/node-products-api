import type { FastifyRequest, FastifyReply } from "fastify";
import type { Product } from "../models/product.model.ts";
import { ProductRepository } from "../repositories/product.repository.ts";

const productRepository = new ProductRepository();

export const getAllProducts = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const products = await productRepository.getAll();
  return reply.status(200).send({
    status: "success",
    results: products.length,
    data: products,
  });
};

export const createProduct = async (
  request: FastifyRequest<{ Body: Product }>,
  reply: FastifyReply
) => {
  const product = request.body as Product;

  const newProduct = await productRepository.create(product);
  return reply.status(201).send({
    status: "success",
    message: "Product created successfully",
    data: newProduct,
  });
};

export const getProductById = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const product = await productRepository.getById(id);

  if (!product) {
    return reply.status(404).send({
      status: "error",
      message: "Product not found",
    });
  }

  return reply.status(200).send({
    status: "success",
    data: product,
  });
};

export const deleteProduct = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    await productRepository.delete(id);
    return reply.status(204).send();
  } catch (err) {
    return reply.status(404).send({
      status: "error",
      message: "Product not found",
    });
  }
};
