import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { RouteOptions } from "../types/route";

export function createRoute<
  Query extends NestedObjectValidatorExpression,
  Body extends NestedObjectValidatorExpression,
  Data extends NestedObjectValidatorExpression
>(options: RouteOptions<Query, Body, Data>) {
  return {};
}

export type RoutesOptions<Params extends Record<string, NestedObjectValidatorExpression>> = {
  [Path in keyof Params]: RouteOptions<Params[Path], Params[Path], Params[Path]>;
};

export function createRoutes<Options extends Record<string, NestedObjectValidatorExpression>>(options: RoutesOptions<Options>) {}

createRoutes({
  a: {
    method: "GET",
    query: {
      a: "boolean!",
    },
    handler(context) {
      context.query;
    },
  },
  b: {
    method: "GET",
    query: {
      a: "boolean!",
      b: "string!",
      c: "date!",
    },
    handler(context) {
      context.query;
    },
  },
});
