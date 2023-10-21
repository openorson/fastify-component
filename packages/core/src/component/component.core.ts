import { ComponentActionDefinitions } from "../action/action.types.js";
import { ComponentConfigDefinitions } from "../config/config.types.js";
import { ComponentHookDefinitions } from "../hook/hook.types.js";
import { ComponentModelDefinitions } from "../model/model.types.js";
import { ComponentRouteDefinitions } from "../route/route.types.js";
import { ComponentScheduleDefinitions } from "../schedule/schedule.types.js";
import { ComponentSocketDefinitions } from "../socket/socket.types.js";
import { Component, ComponentDefinitions } from "./component.types.js";

export function defineComponent<
  Name extends string,
  ConfigDefinitions extends ComponentConfigDefinitions,
  ActionDefinitions extends ComponentActionDefinitions,
  ModelDefinitions extends ComponentModelDefinitions,
  RouteDefinitions extends ComponentRouteDefinitions,
  SocketDefinitions extends ComponentSocketDefinitions,
  ScheduleDefinitions extends ComponentScheduleDefinitions,
  HookDefinitions extends ComponentHookDefinitions
>(
  definitions: ComponentDefinitions<
    Name,
    ConfigDefinitions,
    ActionDefinitions,
    ModelDefinitions,
    RouteDefinitions,
    SocketDefinitions,
    ScheduleDefinitions,
    HookDefinitions
  >
): Component<
  Name,
  ConfigDefinitions,
  ActionDefinitions,
  ModelDefinitions,
  RouteDefinitions,
  SocketDefinitions,
  ScheduleDefinitions,
  HookDefinitions
> {
  function Component() {
    return { definitions };
  }

  Component.$definitions = definitions;

  return Component;
}
