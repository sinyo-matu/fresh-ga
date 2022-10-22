import { Plugin } from "$fresh/server.ts";
import { PluginRenderContext } from "$fresh/src/server/types.ts";

export function gaPlugin(config: GaConfig): Plugin {
  return {
    name: "fresh_ga",
    entrypoints: { main: import.meta.resolve("./plugin.ts") },
    render(ctx: PluginRenderContext) {
      ctx.render();
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
