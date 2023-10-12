import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { Route, RouteOptions } from "../types/route";

export function createRoute<
  Query extends NestedObjectValidatorExpression,
  Body extends NestedObjectValidatorExpression,
  Data extends NestedObjectValidatorExpression
>(routeOptions: RouteOptions<Query, Body, Data>): Route {
  return {};
}

export function createRoutes<
  Query extends NestedObjectValidatorExpression,
  Body extends NestedObjectValidatorExpression,
  Data extends NestedObjectValidatorExpression
>(routesOptions: Record<string, RouteOptions<Query, Body, Data>>): Route {
  return {};
}
