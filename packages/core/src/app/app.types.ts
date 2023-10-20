import { ComponentInstance } from "../component/component.types";

export interface AppOptions {}

export interface BootstrapOptions {
  port?: string | number;
  host?: string;
}

export interface App {
  install: (...components: ComponentInstance[]) => this;
  bootstrap: (options?: BootstrapOptions) => Promise<void>;
}
