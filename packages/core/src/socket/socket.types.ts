import { NestedObjectValidatorExpression, ValidatorExpressionAsType } from "expr-validator";

export interface ComponentSocketHandlerContext<Params> {
  params: Params;
}

export interface ComponentSocketDefinition<SocketParam extends NestedObjectValidatorExpression> {
  params: SocketParam;
  handler: (context: ComponentSocketHandlerContext<ValidatorExpressionAsType<SocketParam>>) => void;
}

export type ComponentSocketParams = Record<string, NestedObjectValidatorExpression>;

export type ComponentSocketDefinitions<SocketParams extends ComponentSocketParams = ComponentSocketParams> = {
  [Message in keyof SocketParams]: ComponentSocketDefinition<SocketParams[Message]>;
};

export interface ComponentSockets<Sockets extends ComponentSocketDefinitions = ComponentSocketDefinitions> {}
