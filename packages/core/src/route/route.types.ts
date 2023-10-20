import { FastifyReply, FastifyRequest, HTTPMethods } from "fastify";
import { ValidatorExpressionAsType } from "expr-validator";
import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";

export interface ComponentRouteSchema {
  query?: NestedObjectValidatorExpression;
  body?: NestedObjectValidatorExpression;
  data?: NestedObjectValidatorExpression;
}

export type ComponentRouteSchemas = Record<string, ComponentRouteSchema>;

export interface JSONResult<Data> {
  data: Data;
}

export type RouteResult<Data> = JSONResult<Data> | Promise<JSONResult<Data>> | void | Promise<void>;

export interface ComponentRouteHandlerContext<Query, Body> {
  query: Query;
  body: Body;
  request: FastifyRequest;
  reply: FastifyReply;
}

export interface ComponentRouteDefinition<RouteSchema extends ComponentRouteSchema> {
  method: Uppercase<HTTPMethods>;
  schema: RouteSchema;
  handler: (
    context: ComponentRouteHandlerContext<ValidatorExpressionAsType<RouteSchema["query"]>, ValidatorExpressionAsType<RouteSchema["body"]>>
  ) => RouteResult<ValidatorExpressionAsType<RouteSchema["data"]>>;
}

export type ComponentRouteDefinitions<RouteSchemas extends ComponentRouteSchemas = ComponentRouteSchemas> = {
  [Path in keyof RouteSchemas]: ComponentRouteDefinition<RouteSchemas[Path]>;
};

export interface ComponentRoutes<Route extends ComponentRouteDefinitions = ComponentRouteDefinitions> {}
