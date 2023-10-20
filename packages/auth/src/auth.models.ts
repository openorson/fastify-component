import { defineModels } from "@fastify-component/core";

export default defineModels({
  user: {
    comment: "用户",
    fields: {
      code: {
        type: "string",
        comment: "用户编号",
      },
    },
  },
});
