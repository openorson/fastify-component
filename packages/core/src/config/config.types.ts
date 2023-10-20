export interface ComponentConfigDefinitions<Data = unknown> {
  data: Data;
}

export interface ComponentConfigs<Config extends ComponentConfigDefinitions = ComponentConfigDefinitions> {
  get data(): Config["data"];
}
