// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/_server-islands/*"
  ],
  exclude: [
    "/",
    "/_astro/*",
    "/favicon.svg",
    "/fonts/*",
    "/404"
  ]
};

// node_modules/.pnpm/wrangler@4.36.0_@cloudflare+workers-types@4.20250913.0/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/davide/Desktop/mrmeowcat.dev/.wrangler/tmp/pages-jdkuX7/bundledWorker-0.3406672894524252.mjs";
import { isRoutingRuleMatch } from "/Users/davide/Desktop/mrmeowcat.dev/node_modules/.pnpm/wrangler@4.36.0_@cloudflare+workers-types@4.20250913.0/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/davide/Desktop/mrmeowcat.dev/.wrangler/tmp/pages-jdkuX7/bundledWorker-0.3406672894524252.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=qrvcwp58onq.js.map
