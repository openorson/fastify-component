import { ComponentHookDefinitions, ComponentHooks } from "./hook.types.js";

export function defineHooks<HookDefinitions extends ComponentHookDefinitions>(definitions: HookDefinitions): ComponentHooks<HookDefinitions> {
  return { [Symbol.for("definitions")]: definitions };
}
