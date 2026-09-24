import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL || "https://apri-cerrajeria-v2.vercel.app",
  output: "static",
});
