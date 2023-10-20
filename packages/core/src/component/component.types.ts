import { ComponentActions } from "../action/action.types";
import { ComponentConfigs } from "../config/config.types";
import { ComponentHookDefinitions, ComponentHooks } from "../hook/hook.types";
import { ComponentModels } from "../model/model.types";
import { ComponentRoutes } from "../route/route.types";
import { ComponentSchedules } from "../schedule/schedule.types";
import { ComponentSockets } from "../socket/socket.types";

export type ComponentContext<Context, Component> = Component | ((context: Context) => Component);

export interface ComponentDefinitions<
  Name extends string = string,
  Configs extends ComponentConfigs = ComponentConfigs,
  Actions extends ComponentActions = ComponentActions,
  Models extends ComponentModels = ComponentModels,
  Routes extends ComponentRoutes = ComponentRoutes,
  Sockets extends ComponentSockets = ComponentSockets,
  Schedules extends ComponentSchedules = ComponentSchedules,
  Hooks extends ComponentHooks = ComponentHooks
> {
  name: Name;
  configs?: ComponentContext<{ name: Name }, Configs>;
  actions?: Actions;
  models?: ComponentContext<{ name: Name; configs?: Configs; actions?: Actions }, Models>;
  routes?: ComponentContext<{ name: Name; configs?: Configs; actions?: Actions; models?: Models }, Routes>;
  sockets?: ComponentContext<{ name: Name; configs?: Configs; actions?: Actions; models?: Models }, Sockets>;
  schedules?: ComponentContext<{ name: Name; configs?: Configs; actions?: Actions; models?: Models }, Schedules>;
  hooks?: ComponentContext<{ name: Name; configs?: Configs; actions?: Actions }, Hooks>;
}

export interface ComponentInstanceBlueprint<
  Name extends string,
  Configs extends ComponentConfigs,
  Actions extends ComponentActions,
  Models extends ComponentModels,
  Routes extends ComponentRoutes,
  Sockets extends ComponentSockets,
  Schedules extends ComponentSchedules,
  Hooks extends ComponentHooks
> {
  name: Name;
  configs?: Configs;
  actions?: Actions;
  models?: Models;
  routes?: Routes;
  sockets?: Sockets;
  schedules?: Schedules;
  hooks?: Hooks;
}

export interface ComponentInstance<
  Name extends string,
  Configs extends ComponentConfigs,
  Actions extends ComponentActions,
  Models extends ComponentModels,
  Routes extends ComponentRoutes,
  Sockets extends ComponentSockets,
  Schedules extends ComponentSchedules,
  Hooks extends ComponentHooks
> {
  blueprint: ComponentInstanceBlueprint<Name, Configs, Actions, Models, Routes, Sockets, Schedules, Hooks>;
}

export interface Component<
  Name extends string = string,
  Configs extends ComponentConfigs = ComponentConfigs,
  Actions extends ComponentActions = ComponentActions,
  Models extends ComponentModels = ComponentModels,
  Routes extends ComponentRoutes = ComponentRoutes,
  Sockets extends ComponentSockets = ComponentSockets,
  Schedules extends ComponentSchedules = ComponentSchedules,
  Hooks extends ComponentHooks = ComponentHooks
> {
  $definitions: ComponentDefinitions<Name, Configs, Actions, Models, Routes, Sockets, Schedules, Hooks>;
  (): ComponentInstance<Name, Configs, Actions, Models, Routes, Sockets, Schedules, Hooks>;
}
