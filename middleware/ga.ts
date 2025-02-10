import type { FreshContext } from "$fresh/server.ts";
import { createReporter } from "https://deno.land/x/g_a@0.1.2/mod.ts";

const reporter = createReporter();
export async function serverGa(req: Request, ctx: FreshContext) {
  const start = performance.now();
  let res: Response;
  let err;
  try {
    res = await ctx.next();
  } catch (error) {
    err = error;
    throw error;
  } finally {
    if (reporter) {
      reporter(req, { remoteAddr: ctx.remoteAddr }, res!, start, err);
    }
  }
  return res;
}
