import fastify from "fastify";
import routes from "./router/index.ts";
const app = fastify({
  logger: true,
});
app.register(routes, { prefix: "/api" });
export default app;
