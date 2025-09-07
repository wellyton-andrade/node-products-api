import fastify from "fastify";
import serverless from "serverless-http";
import formbody from "@fastify/formbody";
import { productRoutes } from "./router/product.router.ts";

const app = fastify({ logger: true });

app.register(formbody);
app.register(productRoutes, { prefix: "/api" });

export const handler = serverless(app as any);

export default app;
