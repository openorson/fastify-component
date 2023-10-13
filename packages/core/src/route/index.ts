import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { Route, RouteOptions } from "../types/route";

export function createRoute<
  Query extends NestedObjectValidatorExpression,
  Body extends NestedObjectValidatorExpression,
  Data extends NestedObjectValidatorExpression
>(options: RouteOptions<Query, Body, Data>): Route {
  return {};
}

interface Type<T> {
  label: T;
  value: (arg: T) => void;
}

export function createRoutes<
  Options extends Record<string, Type<unknown>>,
  UnionOptions = {
    [K in keyof Options]: {
      [K2 in K]: Options[K2];
    };
  }[keyof Options]
>(options: UnionOptions) {}

createRoutes({
  a: {
    label: 1,
    value(arg) {
      console.log(arg);
    },
  },
  b: {
    label: "b",
    value(arg) {
      console.log(arg);
    },
  },
});

const opts = {
  a: {
    query: {
      a: "boolean!",
    },
  },
  b: {
    query: {
      b: 1,
    },
  },
};

type ToUnion<T extends {}> = {
  [K in keyof T]: {
    [K2 in K]: T[K2];
  };
}[keyof T];

type Union = ToUnion<typeof opts>;
