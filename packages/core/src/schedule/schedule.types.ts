export interface ComponentScheduleDefinition {
  cron: string;
  handler: () => void;
}

export type ComponentScheduleDefinitions = Record<string, ComponentScheduleDefinition>;

export interface ComponentSchedules<Definitions extends ComponentScheduleDefinitions = ComponentScheduleDefinitions> {
  [definitions: symbol]: Definitions;
}
