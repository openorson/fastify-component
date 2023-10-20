import { ValidatorExpressionAsType } from "expr-validator";
import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";

export interface ComponentConfigDefinitions<
  Schema extends NestedObjectValidatorExpression,
  Default extends ValidatorExpressionAsType<Schema> = ValidatorExpressionAsType<Schema>
> {
  schema: Schema;
  default: Default;
}

export interface ComponentConfigs<Data = unknown> {
  get data(): Data;
}
