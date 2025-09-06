import { expect, test } from "vitest";
import { ProductRepository } from "../../repositories/product.repository.ts";

const productRepository = new ProductRepository();

test("Get all products", async () => {
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
});
