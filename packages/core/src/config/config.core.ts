import { objectValidator, ValidatorExpressionAsType } from "expr-validator";
import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { ComponentConfigs, ComponentConfigDefinitions } from "./config.types";

export function defineConfigs<
  Schema extends NestedObjectValidatorExpression,
  Default extends ValidatorExpressionAsType<Schema> = ValidatorExpressionAsType<Schema>
>(definitions: ComponentConfigDefinitions<Schema, Default>): ComponentConfigs<Default> {
  const data = objectValidator(definitions.default, definitions.schema);
  return {
    get data() {
      return definitions.default;
    },
  };
}
