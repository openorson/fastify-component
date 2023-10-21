import { defineComponent } from "@fastify-component/core";
import authRoutes from "./auth.routes.js";
import authModels from "./auth.models.js";
import authHooks from "./auth.hooks.js";
import authActions from "./auth.actions.js";
import authSockets from "./auth.sockets.js";
import authSchedules from "./auth.schedules.js";
import authConfigs from "./auth.configs.js";

export const AuthComponent = defineComponent({
  name: "auth",
  configs: authConfigs,
  actions: authActions,
  models: authModels,
  routes: authRoutes,
  sockets: authSockets,
  schedules: authSchedules,
  hooks: authHooks,
});
