import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { DataModels, DataSchemas } from "./model";
import { RoutesOptions } from "./route";

export type ContextOption<Context, Option> = Option | ((context: Context) => Option);

export interface Context<Config> {
  readonly config: Config;
}

export interface RoutesContext<Config, Models> extends Context<Config> {
  models: Models;
}

export interface SchemasContext<Config> extends Context<Config> {}

export interface SchedulesContext<Config, Models> extends Context<Config> {
  models: Models;
}

export interface ServiceContext<Config, Models> extends Context<Config> {
  models: Models;
}

export interface HooksContext<Config> extends Context<Config> {}

export interface ExposeContext<Config, Service> extends Context<Config> {
  service: Service;
}

export interface ComponentOptions<
  Name extends string,
  Config extends {},
  Routes extends Record<string, [NestedObjectValidatorExpression, NestedObjectValidatorExpression, NestedObjectValidatorExpression]>,
  Schemas extends DataSchemas,
  Schedules extends {},
  Service extends {},
  Hooks extends {},
  Expose extends {},
  Models extends DataModels<Schemas> = DataModels<Schemas>
> {
  name: Name;
  prefix?: string;
  config?: Config;
  routes?: ContextOption<RoutesContext<Config, Models>, RoutesOptions<Routes>>;
  schemas?: ContextOption<SchemasContext<Config>, Schemas>;
  schedules?: ContextOption<SchedulesContext<Config, Models>, Schedules>;
  service?: ContextOption<ServiceContext<Config, Models>, Service>;
  hooks?: ContextOption<HooksContext<Config>, Hooks>;
  expose?: ContextOption<ExposeContext<Config, Service>, Expose>;
}

export interface Component {}
