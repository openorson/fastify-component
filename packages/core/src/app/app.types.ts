import { ComponentInstance } from "../component/component.types.js";

export type AppConfigs = Record<
  string,
  {
    type: string;
    value: string;
    comment: string;
  }
>;

export interface AppOptions {
  /** 配置文件路径 */
  env?: string;
}

export interface BootstrapOptions {
  port?: string | number;
  host?: string;
}

export interface App {
  install: (...components: ComponentInstance<any, any, any, any, any, any, any, any>[]) => this;
  bootstrap: (options?: BootstrapOptions) => Promise<void>;
}
