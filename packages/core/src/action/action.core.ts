import { ComponentActionDefinitions, ComponentActions } from "./action.types.js";

export function defineActions<ActionDefinitions extends ComponentActionDefinitions>(
  definitions: ActionDefinitions
): ComponentActions<ActionDefinitions> {
  return { [Symbol.for("definitions")]: definitions } as ComponentActions<ActionDefinitions>;
}
