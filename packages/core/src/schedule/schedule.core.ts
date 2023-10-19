import { ComponentScheduleDefinitions, ComponentSchedules } from "./schedule.types";

export function defineSchedules<ScheduleDefinitions extends ComponentScheduleDefinitions>(
  definitions: ComponentScheduleDefinitions
): ComponentSchedules<ScheduleDefinitions> {
  return {};
}
