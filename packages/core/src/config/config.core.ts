import { ComponentConfigs, ComponentConfigDefinitions } from "./config.types";

export function defineConfigs<ConfigDefinitions extends ComponentConfigDefinitions>(
  definitions: ConfigDefinitions
): ComponentConfigs<ConfigDefinitions> {
  return {
    get data() {
      return definitions.data;
    },
  };
}
