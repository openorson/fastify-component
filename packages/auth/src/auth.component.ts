import { defineComponent, defineRoutes } from "@fastify-component/core";

export const AuthComponent = defineComponent({
  name: "auth",
  routes: defineRoutes({
    "/login": {
      method: "GET",
      schema: {
        query: {
          a: "boolean!",
        },
      },
      handler(context) {},
    },
  }),
});
