import fastify, { FastifyServerOptions } from "fastify";
import { App } from "./app.types.js";
import { ComponentInstance } from "../component/component.types.js";

export function createApp(): App {
  let appComponents: ComponentInstance[] = [];

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
          const options = await component.definitions.hooks?.beforeCreate?.();
          Object.assign(serverOptions, options ?? {});
        }

        const server = fastify(serverOptions);

        for await (const component of appComponents) {
          await component.definitions.hooks?.afterCreate?.(server);
        }

        for await (const component of appComponents) {
          await server.register(async (server, _, done) => {
            const routes = component.definitions.routes?.fastifyRoutes ?? [];
            for await (const route of routes) {
              // server.route({
              //   ...route,
              //   url: path.startsWith("/") ? path : `/${component.definitions.name}/${path}`,
              // });
            }
            done();
          });
        }

        for await (const component of appComponents) {
          await component.definitions.hooks?.beforeStart?.(server);
        }

        await server.ready();

        await server.listen({
          port: port ? +port : void 0,
          host: host ?? "0.0.0.0",
        });

        for await (const component of appComponents) {
          await component.definitions.hooks?.afterStart?.(server);
        }
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    },
  };

  return app;
}
