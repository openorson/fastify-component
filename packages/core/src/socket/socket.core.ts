import { ComponentSocketDefinitions, ComponentSockets } from "./socket.types";

export function defineSockets<SocketDefinitions extends ComponentSocketDefinitions>(
  definitions: SocketDefinitions
): ComponentSockets<SocketDefinitions> {
  return {};
}
