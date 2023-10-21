import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src"],
    outDir: "dist/esm",
    format: ["esm"],
    dts: true,
    sourcemap: true,
  },
]);
