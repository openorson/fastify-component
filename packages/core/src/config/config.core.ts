import { ComponentConfigs, ComponentConfigDefinitions } from "./config.types.js";

export function defineConfigs<ConfigDefinitions extends ComponentConfigDefinitions>(
  definitions: ConfigDefinitions
): ComponentConfigs<ConfigDefinitions> {
  return {
    get data() {
      return definitions.data;
    },
  };
}
