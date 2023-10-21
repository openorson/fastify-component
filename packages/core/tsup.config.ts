import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src"],
    outDir: "dist/esm",
    format: ["esm"],
    dts: true,
    sourcemap: true,
  },
  {
    entry: ["src"],
    outDir: "dist/cjs",
    format: ["cjs"],
    dts: true,
    sourcemap: true,
  },
]);
