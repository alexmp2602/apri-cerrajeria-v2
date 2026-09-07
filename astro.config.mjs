import { defineConfig } from "astro/config";

export default defineConfig({
  site:
    process.env.SITE_URL || "https://apri-24hs-mendoza-v2.lexthus.chatgpt.site",
  output: "static",
});
