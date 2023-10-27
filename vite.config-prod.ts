import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  build: {
    lib: {
      entry: "src/lib/index.ts",
      name: "renumerator-component",
      fileName: (format) => `renumerator-component.${format}.js`,
    },
    rollupOptions: {
      //external: ["svelte/internal"],
    },
  },
});
