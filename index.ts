import { Plugin } from "$fresh/server.ts";
import { PluginRenderContext } from "$fresh/src/server/types.ts";

export function gaPlugin(config: GaConfig): Plugin {
  return {
    name: "fresh-seo",
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
