export type ComponentActionDefinition = (...args: unknown[]) => unknown;

export type ComponentActionDefinitions = Record<string, ComponentActionDefinition>;

export type ComponentActions<Definitions extends ComponentActionDefinitions = ComponentActionDefinitions> = {
  [definitions: symbol]: Definitions;
} & {
  [Name in keyof Definitions]: Definitions[Name];
};
