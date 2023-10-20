export interface ComponentScheduleDefinition {
  cron: string;
  handler: () => void;
}

export type ComponentScheduleDefinitions = Record<string, ComponentScheduleDefinition>;

export interface ComponentSchedules<Schedules extends ComponentScheduleDefinitions = ComponentScheduleDefinitions> {}
