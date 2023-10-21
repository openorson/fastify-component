import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { AppConfigs } from "./app.types.js";
import { join, resolve } from "path";
import { existsSync, writeFile } from "fs";

export function loadEnvConfig(path?: string): AppConfigs {
  const NODE_ENV = process.env.NODE_ENV ?? "development";
  const fullPath = resolve(process.cwd(), path ?? `${path ?? "./"}.env.${NODE_ENV}`);

  if (!existsSync(fullPath)) throw new Error("未找到配置文件，请检查文件路径是否正确。");

  const output = dotenv.config({ path: fullPath });
  dotenvExpand.expand(output);

  if (output.error) throw new Error("配置文件存在错误，请检查配置文件是否正确。");

  return {
    NODE_ENV: {
      type: `"development" | "test" | "production"`,
      value: NODE_ENV,
      comment: "运行环境",
    },
    ...Object.fromEntries(
      Object.entries(output.parsed ?? {}).map(([key, value]) => {
        let _value: string | number = Number(value);
        _value = Number.isNaN(_value) ? value : _value;
        return [key, { type: typeof _value, value: _value, comment: key }];
      })
    ),
  };
}

export function generateEnvConfigTypeFile(configs: AppConfigs) {
  const file = `export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ${Object.entries(configs)
        .map(([key, info]) => {
          return `
      /**
       * ${info.comment}
       * @当前值 ${info.value}
       */
      ${key}: ${info.type};`;
        })
        .join("\n")}
    }
  }
}
`;

  writeFile(`${join(process.cwd(), "src/env.d.ts")}`, file, () => void 0);
}
