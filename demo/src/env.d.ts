export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      
      /**
       * 运行环境
       * @当前值 development
       */
      NODE_ENV: "development" | "test" | "production";

      /**
       * PORT
       * @当前值 1949
       */
      PORT: number;
    }
  }
}
