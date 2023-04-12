import { defineConfig } from "vite"
import { svelte as viteSvelte } from "@sveltejs/vite-plugin-svelte"
import { resolve as pathResolve } from "path"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import sveltePreprocess from "svelte-preprocess"
import svelte from "rollup-plugin-svelte"
// import typescript from "@rollup/plugin-typescript"
import css from "rollup-plugin-css-only"

const production = !process.env.ROLLUP_WATCH
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteSvelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  build: {
    lib: {
      entry: "./src/main.ts",
      formats: ["es", "iife", "cjs"],
      name: "app",
      fileName: "bundle",
    },
    outDir: "build",
    // rollupOptions: {
    //   plugins: [
    //     resolve({
    //       browser: true,
    //       dedupe: ["svelte"],
    //     }),
    //     commonjs(),
    //     typescript({
    //       tsconfig: "./tsconfig.json",
    //       sourceMap: !production,
    //       inlineSources: !production,
    //     }),
    //     svelte({ preprocess: sveltePreprocess() }),
    //   ],
    //   output: {
    //     format: "iife",
    //     entryFileNames: `assets/[name].js`,
    //     chunkFileNames: `assets/[name].js`,
    //     assetFileNames: `assets/[name].[ext]`,
    //   },
    // },
  },
})
