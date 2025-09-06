import type { Product } from "../models/product.model.ts";
import prisma from "../database/prisma.ts";

export interface IProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: number): Promise<Product | null>;
  create(product: Product): Promise<Product>;
  update(id: number, product: Partial<Product>): Promise<Product | null>;
  delete(id: number): Promise<void>;
}

export class ProductRepository implements IProductRepository {
  async getAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  async getById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  }

  async create(product: Product): Promise<Product> {
    return prisma.product.create({ data: product });
  }

  async update(
    id: number,
    productData: Partial<Product>
  ): Promise<Product | null> {
    return prisma.product.update({
      where: { id },
      data: productData,
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
}
