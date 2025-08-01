import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [compress(), robotsTxt()]
});