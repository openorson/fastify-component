import { Component } from "./component";

export interface AppOptions {}

export interface BootstrapOptions {
  port?: string | number;
  host?: string;
}

export interface App {
  install: (component: Component) => this;
  bootstrap: (options?: BootstrapOptions) => Promise<void>;
}
