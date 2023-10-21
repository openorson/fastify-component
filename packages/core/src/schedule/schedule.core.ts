import { ComponentScheduleDefinitions, ComponentSchedules } from "./schedule.types.js";

export function defineSchedules<ScheduleDefinitions extends ComponentScheduleDefinitions>(
  definitions: ScheduleDefinitions
): ComponentSchedules<ScheduleDefinitions> {
  return { [Symbol.for("definitions")]: definitions };
}
