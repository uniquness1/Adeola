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
  // First, build the app
  await build();

  // Then prerender the routes
  const prerenderPlugin = new PrerenderSpaPlugin({
    staticDir: resolve(__dirname, "../dist"),
    routes: ["/", "/about", "/projects", "/contact"],
    renderer: new Renderer({
      inject: {
        foo: "bar",
      },
      headless: true,
      renderAfterTime: 5000,
    }),
  });

  await prerenderPlugin.apply();
}

prerender().catch(console.error);
