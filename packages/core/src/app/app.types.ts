import { ComponentInstance } from "../component/component.types.js";

export interface AppOptions {}

export interface BootstrapOptions {
  port?: string | number;
  host?: string;
}

export interface App {
  install: (...components: ComponentInstance<any, any, any, any, any, any, any, any>[]) => this;
  bootstrap: (options?: BootstrapOptions) => Promise<void>;
}
