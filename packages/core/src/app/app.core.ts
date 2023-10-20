import fastify, { FastifyServerOptions } from "fastify";
import { App } from "./app.types";
import { Component } from "../component/component.types";

export function createApp(): App {
  let appComponents: Component[];

  const app: App = {
    install(...components) {
      appComponents.push(...components);
      return this;
    },
    async bootstrap(options) {
      try {
        const { port = process.env.PORT, host = process.env.HOST } = options ?? {};
        const serverOptions: FastifyServerOptions = { logger: true };
        for await (const component of appComponents) {
          const options = component.$definitions.hooks;
          Object.assign(serverOptions, options ?? {});
        }

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
