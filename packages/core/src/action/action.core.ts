import { ComponentActionDefinitions, ComponentActions } from "./action.types.js";

export function defineActions<ActionDefinitions extends ComponentActionDefinitions>(
  definitions: ActionDefinitions
): ComponentActions<ActionDefinitions> {
  return definitions as ComponentActions<ActionDefinitions>;
}
