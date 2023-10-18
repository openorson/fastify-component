import { Component, ComponentOptions } from "../types/component";
import { DataSchemas } from "../types/model";
import { RouteSchema } from "../types/route";

export function defineComponent<
  Name extends string,
  Config extends {},
  Routes extends Record<string, Partial<RouteSchema>>,
  Schemas extends DataSchemas,
  Schedules extends {},
  Service extends {},
  Hooks extends {},
  Expose extends {}
>(componentOptions: ComponentOptions<Name, Config, Routes, Schemas, Schedules, Service, Hooks, Expose>): Component {
  return {};
}
