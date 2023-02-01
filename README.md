# Astro Storyblok Example

This example is based off the example project in Storyblok, which is set up when you first create a space in Storyblok.

The dependencies are
```
    "@astrojs/netlify": "^2.0.0",
    "@astrojs/tailwind": "^3.0.0",
    "@storyblok/astro": "^2.0.5",
    "astro": "^2.0.1",
    "tailwindcss": "^3.2.4"
  }
  ```
  
  ## Connect to Storyblok
  
 To connect the project to Storyblok (if starting a project like this from scratch), do the following:
 
 ```
 npm install @storyblok/astro
 ```
 
 Add the storyblok configuration to the `astro.config.mjs` file:
 
 ```
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: "<YOURTOKEN>",
      bridge: true,
      apiOptions: {
        region: "us", // if in the US
      },
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
      },
    }),
  ],
});
 ```
 
For the `accessToken` above, be sure to use the **preview token** if you want to use this with the visual editor in a preview branch/environment. If you are using this in production, use the **public token**.

## Visual Editor

To make the Visual Editor work in Storyblok, the project needs to be in SSR mode. To set the project up in SSR mode, this project uses the Netlify adapter. To set up SSR:

```
npm install @astrojs/netlify
```

Add to the `astro.config.mjs`:

```
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    ///
  ],
});
```

Deploy the site to Netlify, then add the newly deployed site's URL to the the Visual Editor settings in Storyblok where it says **Location (default environment)**.

Now you can click the **save** button in the storyblok editor, and it will refresh to show the changes you made.

## Publish storyblok edits to the Netlify site

When in the storyblok editor, if you want clicking **publish** to deploy the changes to the site, you need a webhook do this. In Netlify, go to **deploys / deploy settings / build hooks**. Create a build hook. Give it a name (such as **storyblok_publish**), then copy the hook. Go into the Storyblok space settings - **Webhooks** and add the webhook where it says **Story published & unpublished**.

Now when you click 'publish' in the Storyblok editor, it will trigger a deploy to your site with the changes.




 
