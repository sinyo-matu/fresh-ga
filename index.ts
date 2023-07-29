import { Plugin, PluginAsyncRenderContext } from "$fresh/server.ts";
import { serverGa } from "./middleware/ga.ts";

export function gaPlugin(config: GaConfig = { enableServerGa: false }): Plugin {
  return {
    name: "fresh_ga",
    entrypoints: { main: import.meta.resolve("./plugin.ts") },
    async renderAsync(ctx: PluginAsyncRenderContext) {
      await ctx.renderAsync();
      return {
        scripts: [
          {
            entrypoint: "main",
            state: {},
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
