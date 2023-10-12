import { createRoute, defineComponent } from "@fastify-component/core";

export const AuthComponent = defineComponent({
  name: "auth",
  routes(context) {
    return {
      "/login": createRoute({
        method: "GET",
        query: {
          a: "boolean!",
          b: "number!",
        },
        handler({ query }) {},
      }),
    };
  },
});
