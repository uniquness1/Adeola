// scripts/prerender.js
import { PrerenderSpaPlugin } from "prerender-spa-plugin";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { build } from "vite";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;

async function prerender() {
  console.log("Building the application...");

  // First, build the app
  await build();

  console.log("Build complete. Starting prerendering...");

  // For a single-page app, you only need to prerender the root route
  const prerenderPlugin = new PrerenderSpaPlugin({
    staticDir: resolve(__dirname, "../dist"),
    routes: ["/"], // Only prerender the main page
    renderer: new Renderer({
      headless: true,
      // Increase time to allow animations and content to load
      renderAfterTime: 3000,
      // Wait for content to be ready
      renderAfterDocumentEvent: "render-event",
      // Viewport settings for better rendering
      viewport: {
        width: 1920,
        height: 1080,
      },
    }),
  });

  await prerenderPlugin.apply();
  console.log("Prerendering complete!");
}

prerender().catch((error) => {
  console.error("Prerendering failed:", error);
  process.exit(1);
});
