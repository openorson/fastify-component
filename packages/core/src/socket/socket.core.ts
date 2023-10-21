import { ComponentSocketDefinitions, ComponentSockets } from "./socket.types.js";

export function defineSockets<SocketDefinitions extends ComponentSocketDefinitions>(
  definitions: SocketDefinitions
): ComponentSockets<SocketDefinitions> {
  return {};
}
