// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  adapter: vercel(),
  site: "https://generacionurbana.cl",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    optimizeDeps: {
      include: ["emoji-mart/dist/module.js", "@emoji-mart/data"],
    },
  },
});
