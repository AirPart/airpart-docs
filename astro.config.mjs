// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://AirPart.github.io",
  base: "/airpart-docs",
  integrations: [
    starlight({
      title: "AirPart Docs",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/AirPart/airpart-docs/",
        },
      ],
      sidebar: [
        {
          label: "Backend Service",
          items: [
            {
              autogenerate: { directory: "backend" },
            },
          ],
        },
        {
          label: "Development Workflow",
          items: [
            {
              autogenerate: { directory: "development" },
            },
          ],
        },
      ],
    }),
  ],
});
