import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server", // SSR
  adapter: netlify(),
  integrations: [
    storyblok({
      accessToken: "LSTMzttTLabrQLn9YBzQowtt",
      bridge: true,
      apiOptions: {
        region: "us",
      },
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
      },
    }),
    tailwind(),
  ],
});
