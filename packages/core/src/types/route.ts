import { FastifyReply, FastifyRequest, HTTPMethods } from "fastify";
import { ValidatorExpressionAsType } from "expr-validator";
import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";

export interface JSONResult<Data> {
  data: Data;
}

export type RouteResult<Data> = JSONResult<Data> | Promise<JSONResult<Data>> | void | Promise<void>;

export interface RouteOptions<
  Query extends NestedObjectValidatorExpression = NestedObjectValidatorExpression,
  Body extends NestedObjectValidatorExpression = NestedObjectValidatorExpression,
  Data extends NestedObjectValidatorExpression = NestedObjectValidatorExpression
> {
  method: Uppercase<HTTPMethods>;
  query?: Query;
  body?: Body;
  data?: Data;
  handler: (context: {
    query: ValidatorExpressionAsType<Query>;
    body: ValidatorExpressionAsType<Body>;
    request: FastifyRequest;
    reply: FastifyReply;
  }) => RouteResult<ValidatorExpressionAsType<Data>>;
}

export type RoutesOptions<Params extends Record<string, NestedObjectValidatorExpression>> = {
  [Path in keyof Params]: RouteOptions<Params[Path]>;
};
