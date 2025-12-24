// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server", // ⚠️ Cambiado a server para que el middleware de bloqueo funcione
  adapter: vercel(),
  site: "https://generacionurbano.cl",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
