import fastify from "fastify";
import serverless from "serverless-http";
const app = fastify({
  logger: true,
});
export const handler = serverless(app.server);
export default app;
