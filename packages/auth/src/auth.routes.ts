import { defineRoutes } from "@fastify-component/core";

export default defineRoutes({
  "/login": {
    method: "GET",
    schema: {
      query: {
        method: "string!",
        account: "string!",
        password: "string!",
      },
    },
    handler(context) {},
  },
});
