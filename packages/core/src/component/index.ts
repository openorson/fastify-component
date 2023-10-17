import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { Component, ComponentOptions } from "../types/component";
import { DataSchemas } from "../types/model";

export function defineComponent<
  Name extends string,
  Config extends {},
  Params extends Record<string, NestedObjectValidatorExpression>,
  Schemas extends DataSchemas,
  Schedules extends {},
  Service extends {},
  Hooks extends {},
  Expose extends {}
>(componentOptions: ComponentOptions<Name, Config, Params, Schemas, Schedules, Service, Hooks, Expose>): Component {
  return {};
}
