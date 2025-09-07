import { expect, test, beforeAll, afterAll } from "vitest";
import { ProductRepository } from "../../repositories/product.repository.ts";
import prisma from "../../database/prisma.ts";

const productRepository = new ProductRepository();

// limpa o banco antes e depois dos testes
beforeAll(async () => {
  await prisma.product.deleteMany({});
});

afterAll(async () => {
  await prisma.$disconnect();
});

test("Get all products returns an array", async () => {
  const products = await productRepository.getAll();
  expect(Array.isArray(products)).toBe(true);
});

test("Create a new product", async () => {
  const newProduct = {
    name: "Test Product",
    price: 50,
    stock: 100,
    description: "A product for testing",
    imageUrl: null,
  };

  const createdProduct = await productRepository.create(newProduct);

  expect(createdProduct).toHaveProperty("id");
  expect(createdProduct.name).toBe(newProduct.name);
  expect(createdProduct.price).toBe(newProduct.price);
  expect(createdProduct.stock).toBe(newProduct.stock);
  expect(createdProduct.description).toBe(newProduct.description);
});

test("Get product by id should return product or null", async () => {
  // Cria um produto para garantir que exista
  const productToFind = await productRepository.create({
    name: "Find Me",
    price: 30,
    stock: 10,
    description: "Product to find",
    imageUrl: null,
  });

  const foundProduct = await productRepository.getById(productToFind.id!);

  expect(foundProduct).not.toBeNull();
  if (foundProduct) {
    expect(foundProduct.id).toBe(productToFind.id);
    expect(foundProduct.name).toBe("Find Me");
  }

  const nonExistent = await productRepository.getById(
    "00000000-0000-0000-0000-000000000000"
  );
  expect(nonExistent).toBeNull();
});
