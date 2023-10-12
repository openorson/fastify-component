import { Component, ComponentOptions } from "../types/component";
import { DataSchemas } from "../types/model";
import { Route } from "../types/route";

export function defineComponent<
  Name extends string,
  Config extends {},
  Hooks extends {},
  Routes extends Record<string, Route>,
  Schemas extends DataSchemas,
  Schedules extends {},
  Service extends {},
  Expose extends {}
>(componentOptions: ComponentOptions<Name, Config, Hooks, Routes, Schemas, Schedules, Service, Expose>): Component {
  return {};
}
