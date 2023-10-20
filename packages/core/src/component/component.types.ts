import { ComponentActionDefinitions, ComponentActions } from "../action/action.types";
import { ComponentConfigDefinitions, ComponentConfigs } from "../config/config.types";
import { ComponentHookDefinitions, ComponentHooks } from "../hook/hook.types";
import { ComponentModelDefinitions, ComponentModels } from "../model/model.types";
import { ComponentRouteDefinitions, ComponentRoutes } from "../route/route.types";
import { ComponentScheduleDefinitions, ComponentSchedules } from "../schedule/schedule.types";
import { ComponentSocketDefinitions, ComponentSockets } from "../socket/socket.types";

export interface ComponentDefinitions<
  Name extends string = string,
  ConfigDefinitions extends ComponentConfigDefinitions = ComponentConfigDefinitions,
  ActionDefinitions extends ComponentActionDefinitions = ComponentActionDefinitions,
  ModelDefinitions extends ComponentModelDefinitions = ComponentModelDefinitions,
  RouteDefinitions extends ComponentRouteDefinitions = ComponentRouteDefinitions,
  SocketDefinitions extends ComponentSocketDefinitions = ComponentSocketDefinitions,
  ScheduleDefinitions extends ComponentScheduleDefinitions = ComponentScheduleDefinitions,
  HookDefinitions extends ComponentHookDefinitions = ComponentHookDefinitions
> {
  name: Name;
  configs?: ComponentConfigs<ConfigDefinitions>;
  actions?: ComponentActions<ActionDefinitions>;
  models?: ComponentModels<ModelDefinitions>;
  routes?: ComponentRoutes<RouteDefinitions>;
  sockets?: ComponentSockets<SocketDefinitions>;
  schedules?: ComponentSchedules<ScheduleDefinitions>;
  hooks?: ComponentHooks<HookDefinitions>;
}

export interface ComponentInstance<
  Name extends string = string,
  ConfigDefinitions extends ComponentConfigDefinitions = ComponentConfigDefinitions,
  ActionDefinitions extends ComponentActionDefinitions = ComponentActionDefinitions,
  ModelDefinitions extends ComponentModelDefinitions = ComponentModelDefinitions,
  RouteDefinitions extends ComponentRouteDefinitions = ComponentRouteDefinitions,
  SocketDefinitions extends ComponentSocketDefinitions = ComponentSocketDefinitions,
  ScheduleDefinitions extends ComponentScheduleDefinitions = ComponentScheduleDefinitions,
  HookDefinitions extends ComponentHookDefinitions = ComponentHookDefinitions
> {
  definitions: ComponentDefinitions<
    Name,
    ConfigDefinitions,
    ActionDefinitions,
    ModelDefinitions,
    RouteDefinitions,
    SocketDefinitions,
    ScheduleDefinitions,
    HookDefinitions
  >;
}

export interface Component<
  Name extends string = string,
  ConfigDefinitions extends ComponentConfigDefinitions = ComponentConfigDefinitions,
  ActionDefinitions extends ComponentActionDefinitions = ComponentActionDefinitions,
  ModelDefinitions extends ComponentModelDefinitions = ComponentModelDefinitions,
  RouteDefinitions extends ComponentRouteDefinitions = ComponentRouteDefinitions,
  SocketDefinitions extends ComponentSocketDefinitions = ComponentSocketDefinitions,
  ScheduleDefinitions extends ComponentScheduleDefinitions = ComponentScheduleDefinitions,
  HookDefinitions extends ComponentHookDefinitions = ComponentHookDefinitions
> {
  $definitions: ComponentDefinitions<
    Name,
    ConfigDefinitions,
    ActionDefinitions,
    ModelDefinitions,
    RouteDefinitions,
    SocketDefinitions,
    ScheduleDefinitions,
    HookDefinitions
  >;
  (): ComponentInstance<
    Name,
    ConfigDefinitions,
    ActionDefinitions,
    ModelDefinitions,
    RouteDefinitions,
    SocketDefinitions,
    ScheduleDefinitions,
    HookDefinitions
  >;
}
