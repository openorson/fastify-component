export type ComponentActionDefinition = (...args: unknown[]) => unknown;

export type ComponentActionDefinitions = Record<string, ComponentActionDefinition>;

export type ComponentActions<Actions extends ComponentActionDefinitions = ComponentActionDefinitions> = {
  [Name in keyof Actions]: Actions[Name] & { decorate: (...decorators: ((...args: any) => any)[]) => Actions[Name] };
};
