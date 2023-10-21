import { ComponentScheduleDefinitions, ComponentSchedules } from "./schedule.types.js";

export function defineSchedules<ScheduleDefinitions extends ComponentScheduleDefinitions>(
  definitions: ComponentScheduleDefinitions
): ComponentSchedules<ScheduleDefinitions> {
  return {};
}
