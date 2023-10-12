import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { Route, RouteOptions } from "../types/route";

export function createRoute<
  Query extends NestedObjectValidatorExpression,
  Body extends NestedObjectValidatorExpression,
  Data extends NestedObjectValidatorExpression
>(routeOptions: RouteOptions<Query, Body, Data>): Route {
  return {};
}

// createRoute({
//   method: "GET",
//   query: {
//     a: "boolean!",
//   },
//   handler(context) {
//     context.query.a;
//   },
// });

export function createRoutes<
  Paths extends string,
  Options extends Record<Paths, RouteOptions<{}, {}, {}>>,
  const RoutesOptions = {
    [Path in Paths]: Options[Path] extends RouteOptions<infer Query, infer Body, infer Data> ? RouteOptions<Query, Body, Data> : never;
  }
>(routesOptions: RoutesOptions): Route {
  return {};
}

createRoutes({
  a: {
    method: "GET",
    query: {
      a: "boolean!",
    },
    body: {},
    data: {},
    handler(context) {
      context.query;
    },
  },
  b: {
    method: "GET",
    query: {
      a: "boolean!",
    },
    body: {},
    data: {},
    handler(context) {},
  },
});
