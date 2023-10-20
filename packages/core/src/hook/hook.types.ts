import { FastifyInstance, FastifyServerOptions } from "fastify";

export interface ComponentHookDefinitions {
  /** 应用创建前 */
  beforeCreate?: () => void | FastifyServerOptions | Promise<void | FastifyServerOptions>;
  /** 应用创建后 */
  afterCreate?: (server: FastifyInstance) => void | Promise<void>;
  /** 应用启动前 */
  beforeStart?: (server: FastifyInstance) => void | Promise<void>;
  /** 应用启动后 */
  afterStart?: (server: FastifyInstance) => void | Promise<void>;
}

export type ComponentHooks<Hooks extends ComponentHookDefinitions = ComponentHookDefinitions> = Hooks;
