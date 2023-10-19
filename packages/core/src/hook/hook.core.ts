import { ComponentHookDefinitions, ComponentHooks } from "./hook.types";

export function defineHooks<HookDefinitions extends ComponentHookDefinitions>(definitions: HookDefinitions): ComponentHooks<HookDefinitions> {
  return definitions;
}
