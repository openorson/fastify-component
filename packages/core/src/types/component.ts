import { DataModels, DataSchemas } from "./model";
import { Route } from "./route";

export type ContextOption<Context, Option> = Option | ((context: Context) => Option);

export interface Context<Config> {
  readonly config: Config;
}

export interface HooksContext<Config> extends Context<Config> {}

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

export interface ExposeContext<Config, Service> extends Context<Config> {
  service: Service;
}

export interface ComponentOptions<
  Name extends string,
  Config extends {},
  Hooks extends {},
  Routes extends Record<string, Route>,
  Schemas extends DataSchemas,
  Schedules extends {},
  Service extends {},
  Expose extends {},
  Models extends DataModels<Schemas> = DataModels<Schemas>
> {
  name: Name;
  prefix?: string;
  config?: Config;
  hooks?: ContextOption<HooksContext<Config>, Hooks>;
  routes?: ContextOption<RoutesContext<Config, Models>, Routes>;
  schemas?: ContextOption<SchemasContext<Config>, Schemas>;
  schedules?: ContextOption<SchedulesContext<Config, Models>, Schedules>;
  service?: ContextOption<ServiceContext<Config, Models>, Service>;
  expose?: ContextOption<ExposeContext<Config, Service>, Expose>;
}

export interface Component {}
