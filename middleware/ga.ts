import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { createReporter } from "$g_a";

const reporter = createReporter();
export async function serverGa(req: Request, ctx: MiddlewareHandlerContext) {
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
