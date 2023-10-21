import { ComponentRouteDefinitions, ComponentRouteSchemas, ComponentRoutes } from "./route.types.js";

export function defineRoutes<RouteSchemas extends ComponentRouteSchemas>(
  definitions: ComponentRouteDefinitions<RouteSchemas>
): ComponentRoutes<ComponentRouteDefinitions<any>> {
  return { [Symbol.for("definitions")]: definitions };
}
