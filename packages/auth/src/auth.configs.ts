import { defineConfigs } from "@fastify-component/core";

export default defineConfigs({
  data: {
    accessTokenExpire: process.env.ACCESS_TOKEN_EXPIRE,
  },
});
