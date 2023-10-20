import { Component } from "../component/component.types";

export interface AppOptions {}

export interface BootstrapOptions {
  port?: string | number;
  host?: string;
}

export interface App {
  install: (...components: Component[]) => this;
  bootstrap: (options?: BootstrapOptions) => Promise<void>;
}
