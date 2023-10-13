import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { Route, RouteOptions } from "../types/route";

export function createRoute<
  Query extends NestedObjectValidatorExpression,
  Body extends NestedObjectValidatorExpression,
  Data extends NestedObjectValidatorExpression
>(options: RouteOptions<Query, Body, Data>): Route {
  return {};
}
