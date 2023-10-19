import fastify from "fastify";
import { App } from "../types/app";
import { Component } from "../types/component";

export function createApp(): App {
  let appComponent: Component;

  const app: App = {
    install(component) {
      appComponent = component;
      return this;
    },
    async bootstrap(options) {
      const { port = process.env.PORT, host = process.env.HOST } = options ?? {};

      try {
        const server = fastify();

        await server.ready();

        await server.listen({
          port: port ? +port : void 0,
          host: host ?? "0.0.0.0",
        });
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    },
  };

  return app;
}
