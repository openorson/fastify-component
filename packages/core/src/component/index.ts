import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { Component, ComponentOptions } from "../types/component";
import { DataSchemas } from "../types/model";

export function defineComponent<
  Name extends string,
  Config extends {},
  Hooks extends {},
  Routes extends Record<string, NestedObjectValidatorExpression>,
  Schemas extends DataSchemas,
  Schedules extends {},
  Service extends {},
  Expose extends {}
>(componentOptions: ComponentOptions<Name, Config, Hooks, Routes, Schemas, Schedules, Service, Expose>): Component {
  return {};
}
