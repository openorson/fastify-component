import { defineActions } from "../action/action.core";
import { ComponentActions } from "../action/action.types";
import { defineConfigs } from "../config/config.core";
import { ComponentConfigs } from "../config/config.types";
import { defineHooks } from "../hook/hook.core";
import { ComponentHooks } from "../hook/hook.types";
import { defineModels } from "../model/model.core";
import { ComponentModels } from "../model/model.types";
import { defineRoutes } from "../route/route.core";
import { ComponentRoutes } from "../route/route.types";
import { defineSchedules } from "../schedule/schedule.core";
import { ComponentSchedules } from "../schedule/schedule.types";
import { defineSockets } from "../socket/socket.core";
import { ComponentSockets } from "../socket/socket.types";
import { ComponentDefinitions } from "./component.types";

export function defineComponent<
  Name extends string,
  Configs extends ComponentConfigs<any>,
  Hooks extends ComponentHooks<any>,
  Models extends ComponentModels<any>,
  Routes extends ComponentRoutes,
  Sockets extends ComponentSockets,
  Schedules extends ComponentSchedules<any>,
  Actions extends ComponentActions<any>
>(definitions: ComponentDefinitions<Name, Configs, Hooks, Models, Routes, Sockets, Schedules, Actions>) {}

defineComponent({
  name: "TEST",
  configs: defineConfigs({
    schema: {
      a: "boolean!",
    },
    default: {
      a: true,
    },
  }),
  hooks: defineHooks({
    beforeCreate() {},
    afterCreate(server) {},
    beforeStart(server) {},
    afterStart(server) {},
  }),
  models: defineModels({
    a: {
      comment: "field",
      fields: {
        a: { type: "number", comment: "number field" },
      },
    },
  }),
  routes: defineRoutes({
    a: {
      method: "GET",
      schema: {
        query: {
          a: "boolean!",
        },
        body: {
          b: "number!",
        },
      },
      handler(context) {
        context.query.a;
        context.body.b;
      },
    },
  }),
  sockets: defineSockets({
    a: {
      params: {
        a: "boolean!",
      },
      handler(context) {
        context.params.a;
      },
    },
  }),
  schedules: defineSchedules({
    a: {
      cron: "",
      handler() {},
    },
  }),
  actions: defineActions({
    a() {},
  }),
});
