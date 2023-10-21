export interface ComponentConfigDefinitions<Data = unknown> {
  data: Data;
}

export interface ComponentConfigs<Definitions extends ComponentConfigDefinitions = ComponentConfigDefinitions> {
  [definitions: symbol]: Definitions;
  get data(): Definitions["data"];
}
