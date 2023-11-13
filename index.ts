import { Plugin, PluginAsyncRenderContext } from "$fresh/server.ts";
import { serverGa } from "./middleware/ga.ts";
const GA_TRACKING_ID = "GA_TRACKING_ID";

export function gaPlugin(config: GaConfig = { enableServerGa: false }): Plugin {
  const gaTrackingId = Deno.env.get(GA_TRACKING_ID);
  if (!gaTrackingId) {
    throw new Error(
      `Missing env variable ${GA_TRACKING_ID}. Please set it to your Google Analytics tracking ID.`
    );
  }
  return {
    name: "fresh_ga",
    entrypoints: { main: import.meta.resolve("./plugin.ts") },
    async renderAsync(ctx: PluginAsyncRenderContext) {
      await ctx.renderAsync();
      return {
        scripts: [
          {
            entrypoint: "main",
            state: { gaTrackingId },
          },
        ],
      };
    },
    middlewares: config.enableServerGa
      ? [
          {
            path: "/*",
            middleware: {
              handler: serverGa,
            },
          },
        ]
      : undefined,
  };
}

export interface GaConfig {
  enableServerGa: boolean;
}
