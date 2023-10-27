// @ts-ignore
import { sveltekit } from "@sveltejs/kit/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // Spécifiez ici le dossier de sortie
  },
  plugins: [sveltekit()],
});
