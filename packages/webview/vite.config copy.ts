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
  base: "false",
  plugins: [viteSvelte()],
  build: {
    // lib: {
    //   entry: pathResolve(__dirname, "lib/main.js"),
    //   formats: ["iife"],
    //   name: "app",
    //   fileName: "bundle",
    // },
    rollupOptions: {
      input: "src/main.ts",
      output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        // manualChunks: undefined,
        dir: "./public/build2",
        // dir: "",
        // file: "./public/build/bundle.js",
      },

      plugins: [
        svelte(),
        // svelte({
        //   // enable run-time checks when not in production
        //   dev: !production,
        //   // we'll extract any component CSS out into
        //   // a separate file - better for performance
        //   css: (css) => {
        //     css.write(name + ".css")
        //   },
        //   preprocess: sveltePreprocess(),
        // }),

        resolve({
          browser: true,
          dedupe: ["svelte"],
        }),
        commonjs(),
        typescript({
          sourceMap: !production,
          inlineSources: !production,
        }),
      ],
      watch: {},
    },
  },
})
