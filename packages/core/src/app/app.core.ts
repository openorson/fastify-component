import fastify, { FastifyServerOptions } from "fastify";
import { App } from "./app.types";
import { ComponentInstance } from "../component/component.types";

export function createApp(): App {
  let appComponents: ComponentInstance[];

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
          const options = await component.blueprint.hooks?.beforeCreate?.();
          Object.assign(serverOptions, options ?? {});
        }

        const server = fastify(serverOptions);

        for await (const component of appComponents) {
          await component.blueprint.hooks?.afterCreate?.(server);
        }

        for await (const component of appComponents) {
          await server.register((server, _, done) => {
            Object.entries(component.blueprint.routes ?? {}).forEach(([path, route]) => {
              server.route({
                ...route,
                url: path.startsWith("/") ? path : `/${component.blueprint.name}/${path}`,
              });
            });
            done();
          });
        }

        for await (const component of appComponents) {
          await component.blueprint.hooks?.beforeStart?.(server);
        }

        await server.ready();

        await server.listen({
          port: port ? +port : void 0,
          host: host ?? "0.0.0.0",
        });

        for await (const component of appComponents) {
          await component.blueprint.hooks?.afterStart?.(server);
        }
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    },
  };

  return app;
}
