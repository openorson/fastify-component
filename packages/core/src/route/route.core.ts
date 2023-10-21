import { RouteOptions } from "fastify";
import { ComponentRouteDefinitions, ComponentRouteSchemas, ComponentRoutes } from "./route.types.js";

export function defineRoutes<RouteSchemas extends ComponentRouteSchemas>(
  definitions: ComponentRouteDefinitions<RouteSchemas>
): ComponentRoutes<ComponentRouteDefinitions> {
  const fastifyRoutes = Object.entries(definitions).map(([routePath, routeDefinition]) => {
    return {
      method: routeDefinition.method,
      url: routePath,
      handler: routeDefinition.handler,
    } as RouteOptions;
  });

  return { fastifyRoutes };
}
