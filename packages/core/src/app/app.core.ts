import fastify, { FastifyServerOptions, RouteOptions } from "fastify";
import { App, AppOptions } from "./app.types.js";
import { ComponentInstance } from "../component/component.types.js";
import { generateEnvConfigTypeFile, loadEnvConfig } from "./app.config.js";
import { objectValidator } from "expr-validator";

export function createApp(appOptions?: AppOptions): App {
  const configs = loadEnvConfig(appOptions?.env);

  if (configs.NODE_ENV.value === "development") generateEnvConfigTypeFile(configs);

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
          const options = await component.definitions.hooks?.[Symbol.for("definitions")]?.beforeCreate?.();
          Object.assign(serverOptions, options ?? {});
        }

        const server = fastify(serverOptions);

        for await (const component of appComponents) {
          await component.definitions.hooks?.[Symbol.for("definitions")]?.afterCreate?.(server);
        }

        for await (const component of appComponents) {
          await server.register(async (server, _, done) => {
            const definitions = component.definitions.routes?.[Symbol.for("definitions")] ?? {};

            const routes = Object.entries(definitions).map(([routePath, routeDefinition]) => {
              return {
                method: routeDefinition.method,
                url: routePath.startsWith("/") ? routePath : `/${component.definitions.name}/${routePath}`,
                async handler(request, reply) {
                  const [queryValid, query] = routeDefinition.schema.query
                    ? objectValidator.transform(request.query, routeDefinition.schema.query)
                    : [true, {}];

                  const [bodyValid, body] = routeDefinition.schema.body
                    ? objectValidator.transform(request.body, routeDefinition.schema.body)
                    : [true, {}];

                  if (!queryValid)
                    return reply.status(400).send({
                      schema: routeDefinition.schema.query,
                      code: 400,
                      message: `The query parameter must satisfy the schema expression.`,
                    });
                  if (!bodyValid)
                    return reply.status(400).send({
                      schema: routeDefinition.schema.body,
                      code: 400,
                      message: `The body parameter must satisfy the schema expression.`,
                    });

                  const result = await routeDefinition.handler({ request, reply, query, body });

                  return result;
                },
              } as RouteOptions;
            });

            for await (const route of routes) {
              server.route(route);
            }

            done();
          });
        }

        for await (const component of appComponents) {
          await component.definitions.hooks?.[Symbol.for("definitions")]?.beforeStart?.(server);
        }

        await server.ready();

        await server.listen({
          port: port ? +port : 1949,
          host: host ?? "0.0.0.0",
        });

        for await (const component of appComponents) {
          await component.definitions.hooks?.[Symbol.for("definitions")]?.afterStart?.(server);
        }
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    },
  };

  return app;
}
