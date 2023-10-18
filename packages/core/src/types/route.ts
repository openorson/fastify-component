import { FastifyReply, FastifyRequest, HTTPMethods } from "fastify";
import { ValidatorExpressionAsType } from "expr-validator";
import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";

export interface RouteSchema {
  query: NestedObjectValidatorExpression;
  body: NestedObjectValidatorExpression;
  data: NestedObjectValidatorExpression;
}

export interface JSONResult<Data> {
  data: Data;
}

export type RouteResult<Data> = JSONResult<Data> | Promise<JSONResult<Data>> | void | Promise<void>;

export interface RouteOptions<Schema extends Partial<RouteSchema>> {
  method: Uppercase<HTTPMethods>;
  schema: Schema;
  handler: (context: {
    query: ValidatorExpressionAsType<Schema["query"]>;
    body: ValidatorExpressionAsType<Schema["body"]>;
    request: FastifyRequest;
    reply: FastifyReply;
  }) => RouteResult<ValidatorExpressionAsType<Schema["data"]>>;
}

export type RoutesOptions<Routes extends Record<string, Partial<RouteSchema>>> = {
  [Path in keyof Routes]: RouteOptions<Routes[Path]>;
};
