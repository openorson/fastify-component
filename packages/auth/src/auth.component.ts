import { defineComponent } from "@fastify-component/core";
import authRoutes from "./auth.routes";
import authModels from "./auth.models";
import authHooks from "./auth.hooks";
import authActions from "./auth.actions";
import authSockets from "./auth.sockets";
import authSchedules from "./auth.schedules";
import authConfigs from "./auth.configs";

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
