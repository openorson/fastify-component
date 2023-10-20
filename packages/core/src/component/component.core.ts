import { ComponentActions } from "../action/action.types";
import { ComponentConfigs } from "../config/config.types";
import { ComponentHooks } from "../hook/hook.types";
import { ComponentModels } from "../model/model.types";
import { ComponentRoutes } from "../route/route.types";
import { ComponentSchedules } from "../schedule/schedule.types";
import { ComponentSockets } from "../socket/socket.types";
import { Component, ComponentDefinitions } from "./component.types";

export function defineComponent<
  Name extends string,
  Configs extends ComponentConfigs<any>,
  Actions extends ComponentActions<any>,
  Models extends ComponentModels<any>,
  Routes extends ComponentRoutes,
  Sockets extends ComponentSockets,
  Schedules extends ComponentSchedules<any>,
  Hooks extends ComponentHooks<any>
>(definitions: ComponentDefinitions<Name, Configs, Actions, Models, Routes, Sockets, Schedules, Hooks>): Component {
  return {};
}
