// import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
// import { RouteOptions, RoutesOptions } from "../types/route";

// export function createRoute<
//   Query extends NestedObjectValidatorExpression,
//   Body extends NestedObjectValidatorExpression,
//   Data extends NestedObjectValidatorExpression
// >(options: RouteOptions<Query, Body, Data>) {
//   return {};
// }

// export function createRoutes<Options extends Record<string, NestedObjectValidatorExpression>>(options: RoutesOptions<Options>) {}

// createRoutes({
//   a: {
//     method: "GET",
//     query: {
//       a: "boolean!",
//     },
//     handler(context) {
//       context.query;
//     },
//   },
//   b: {
//     method: "GET",
//     query: {
//       a: "boolean!",
//       b: "string!",
//       c: "date!",
//     },
//     handler(context) {
//       context.query;
//     },
//   },
// });

// interface FooValue<T> {
//   default: T;
//   fn: (val: T) => any;
// }

// type Foo<T> = {
//   [K in keyof T]: FooValue<T[K]>;
// };

// function asFoo<T>(foo: Foo<T>): Foo<T> {
//   return foo;
// }

// asFoo({
//   key1: {
//     default: 1,
//     fn(val) {},
//   },
//   key2: {
//     default: "2",
//     fn(val) {},
//   },
// });
