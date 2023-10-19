import { ComponentActions } from "../action/action.types";
import { ComponentConfigs } from "../config/config.types";
import { ComponentHooks } from "../hook/hook.types";
import { ComponentModels } from "../model/model.types";
import { ComponentRoutes } from "../route/route.types";
import { ComponentSchedules } from "../schedule/schedule.types";
import { ComponentSockets } from "../socket/socket.types";

// TODO
export type ComponentContext<Context, Component> = Component | ((context: Context) => Component);

export interface ComponentDefinitions<
  Name extends string,
  Configs extends ComponentConfigs<any>,
  Hooks extends ComponentHooks<any>,
  Models extends ComponentModels<any>,
  Routes extends ComponentRoutes,
  Sockets extends ComponentSockets,
  Schedules extends ComponentSchedules<any>,
  Actions extends ComponentActions<any>
> {
  name: Name;
  configs?: Configs;
  hooks?: Hooks;
  models?: Models;
  routes?: Routes;
  sockets?: Sockets;
  schedules?: Schedules;
  actions?: Actions;
}
