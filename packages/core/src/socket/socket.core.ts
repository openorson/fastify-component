import { NestedObjectValidatorExpression } from "expr-validator/dist/esm/validators/object";
import { ComponentSocketDefinitions, ComponentSocketParams, ComponentSockets } from "./socket.types";

export function defineSockets<Params extends ComponentSocketParams>(definitions: ComponentSocketDefinitions<Params>): ComponentSockets {
  return {};
}
