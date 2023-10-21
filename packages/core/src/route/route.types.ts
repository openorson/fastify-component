import { FastifyReply, FastifyRequest, HTTPMethods } from "fastify";
import { NestedObjectValidatorExpression, ValidatorExpressionAsType } from "expr-validator";

export interface ComponentRouteSchema {
  query?: NestedObjectValidatorExpression;
  body?: NestedObjectValidatorExpression;
  data?: NestedObjectValidatorExpression;
}

export type ComponentRouteSchemas = Record<string, ComponentRouteSchema>;

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
    context: ComponentRouteHandlerContext<
      ValidatorExpressionAsType<RouteSchema["query"]> extends never ? {} : ValidatorExpressionAsType<RouteSchema["query"]>,
      ValidatorExpressionAsType<RouteSchema["body"]> extends never ? {} : ValidatorExpressionAsType<RouteSchema["body"]>
    >
  ) => ValidatorExpressionAsType<RouteSchema["data"]> extends never
    ? unknown | Promise<unknown>
    : ValidatorExpressionAsType<RouteSchema["data"]> | Promise<ValidatorExpressionAsType<RouteSchema["data"]>>;
}

export type ComponentRouteDefinitions<RouteSchemas extends ComponentRouteSchemas = ComponentRouteSchemas> = {
  [Path in keyof RouteSchemas]: ComponentRouteDefinition<RouteSchemas[Path]>;
};

export interface ComponentRoutes<Definitions extends ComponentRouteDefinitions = ComponentRouteDefinitions> {
  [definitions: symbol]: Definitions;
}
