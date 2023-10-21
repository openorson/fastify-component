import { ComponentActionDefinitions } from "../action/action.types";
import { ComponentConfigDefinitions } from "../config/config.types";
import { ComponentHookDefinitions } from "../hook/hook.types";
import { ComponentModelDefinitions } from "../model/model.types";
import { ComponentRouteDefinitions } from "../route/route.types";
import { ComponentScheduleDefinitions } from "../schedule/schedule.types";
import { ComponentSocketDefinitions } from "../socket/socket.types";
import { Component, ComponentDefinitions } from "./component.types";

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
    console.log(definitions);
    return { definitions };
  }

  Component.$definitions = definitions;

  return Component;
}
