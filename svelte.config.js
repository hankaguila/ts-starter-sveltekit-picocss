import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/**
 * @type {import("@sveltejs/kit").Config}
 * @see https://kit.svelte.dev/docs/configuration
 */
const config = {
  // https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: vitePreprocess(),

  onwarn: (warning, handler) => {
    if (warning.code.startsWith("a11y-")) {
      return;
    }
    handler(warning);
  },

  kit: {
    // https://kit.svelte.dev/docs/adapters
    adapter: adapter({
      out: "dist"
    }),
    outDir: "build"
  }
};

export default config;
