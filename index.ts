import { Plugin, PluginAsyncRenderContext } from "$fresh/server.ts";

export function gaPlugin(config: GaConfig): Plugin {
  return {
    name: "fresh_ga",
    entrypoints: { main: import.meta.resolve("./plugin.ts") },
    async renderAsync(ctx: PluginAsyncRenderContext) {
      await ctx.renderAsync();
      return {
        scripts: [
          {
            entrypoint: "main",
            state: config,
          },
        ],
      };
    },
  };
}

export interface GaConfig {
  gaKey: string;
}
