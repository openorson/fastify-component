import { FastifyReply, FastifyRequest, HTTPMethods } from "fastify";
import { ValidatorExpressionAsType } from "expr-validator";
import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";

export interface JSONResult<Data> {
  data: Data;
}

export type RouteResult<Data> = JSONResult<Data> | Promise<JSONResult<Data>> | void | Promise<void>;

export interface RouteOptions<
  Expressions extends [NestedObjectValidatorExpression, NestedObjectValidatorExpression, NestedObjectValidatorExpression]
> {
  method: Uppercase<HTTPMethods>;
  expressions: Expressions;
  handler: (context: {
    query: ValidatorExpressionAsType<Expressions[0]>;
    body: ValidatorExpressionAsType<Expressions[1]>;
    request: FastifyRequest;
    reply: FastifyReply;
  }) => RouteResult<ValidatorExpressionAsType<Expressions[2]>>;
}

export type RoutesOptions<
  Routes extends Record<string, [NestedObjectValidatorExpression, NestedObjectValidatorExpression, NestedObjectValidatorExpression]>
> = {
  [Path in keyof Routes]: RouteOptions<Routes[Path]>;
};
