import { ComponentActions } from "../action/action.types";
import { ComponentConfigs } from "../config/config.types";
import { ComponentHooks } from "../hook/hook.types";
import { ComponentModels } from "../model/model.types";
import { ComponentRoutes } from "../route/route.types";
import { ComponentSchedules } from "../schedule/schedule.types";
import { ComponentSockets } from "../socket/socket.types";

export type ComponentContext<Context, Component> = Component | ((context: Context) => Component);

export interface ComponentDefinitions<
  Name extends string,
  Configs extends ComponentConfigs<any>,
  Actions extends ComponentActions<any>,
  Models extends ComponentModels<any>,
  Routes extends ComponentRoutes,
  Sockets extends ComponentSockets,
  Schedules extends ComponentSchedules<any>,
  Hooks extends ComponentHooks<any>
> {
  name: Name;
  configs?: ComponentContext<{ name: Name }, Configs>;
  actions?: Actions;
  models?: ComponentContext<{ name: Name; configs: Configs; actions: Actions }, Models>;
  routes?: ComponentContext<{ name: Name; configs: Configs; actions: Actions; models: Models }, Routes>;
  sockets?: ComponentContext<{ name: Name; configs: Configs; actions: Actions; models: Models }, Sockets>;
  schedules?: ComponentContext<{ name: Name; configs: Configs; actions: Actions; models: Models }, Schedules>;
  hooks?: ComponentContext<{ name: Name; configs: Configs; actions: Actions }, Hooks>;
}

export interface Component {}
