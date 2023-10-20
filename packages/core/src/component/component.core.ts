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
  Configs extends ComponentConfigs,
  Actions extends ComponentActions,
  Models extends ComponentModels,
  Routes extends ComponentRoutes,
  Sockets extends ComponentSockets,
  Schedules extends ComponentSchedules,
  Hooks extends ComponentHooks
>(
  definitions: ComponentDefinitions<Name, Configs, Actions, Models, Routes, Sockets, Schedules, Hooks>
): Component<Name, Configs, Actions, Models, Routes, Sockets, Schedules, Hooks> {
  function Component() {
    const name = definitions.name;

    const configs = typeof definitions.configs === "function" ? definitions.configs({ name }) : definitions.configs;

    const actions = definitions.actions;

    const models =
      typeof definitions.models === "function"
        ? definitions.models({ name: definitions.name, configs: configs, actions: actions })
        : definitions.models;

    const routes = typeof definitions.routes === "function" ? definitions.routes({ name, configs, actions, models }) : definitions.routes;

    const sockets = typeof definitions.sockets === "function" ? definitions.sockets({ name, configs, actions, models }) : definitions.sockets;

    const schedules = typeof definitions.schedules === "function" ? definitions.schedules({ name, configs, actions, models }) : definitions.schedules;

    const hooks = typeof definitions.hooks === "function" ? definitions.hooks({ name, configs, actions }) : definitions.hooks;

    return { blueprint: { name, configs, actions, models, routes, sockets, schedules, hooks } };
  }

  Component.$definitions = definitions;

  return Component;
}
