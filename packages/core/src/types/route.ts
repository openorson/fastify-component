import { FastifyReply, FastifyRequest, HTTPMethods } from "fastify";
import { ValidatorExpressionAsType } from "expr-validator";
import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";

export interface JSONResult<Data> {
  data: Data;
}

export type RouteResult<Data> = JSONResult<Data> | Promise<JSONResult<Data>> | void | Promise<void>;

export interface RouteOptions<
  Query extends NestedObjectValidatorExpression
  // Body extends NestedObjectValidatorExpression,
  // Data extends NestedObjectValidatorExpression
> {
  method: Uppercase<HTTPMethods>;
  query?: Query;
  body?: Body;
  data?: Query;
  handler: (context: {
    query: ValidatorExpressionAsType<Query>;
    body: ValidatorExpressionAsType<Body>;
    request: FastifyRequest;
    reply: FastifyReply;
  }) => RouteResult<ValidatorExpressionAsType<Query>>;
}

export type RoutesOptions<Params extends Record<string, NestedObjectValidatorExpression>> = {
  [K in keyof Params]: RouteOptions<Params[K]>;
};
