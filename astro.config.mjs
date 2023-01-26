import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  output: "server",
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
