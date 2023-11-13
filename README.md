# fresh-ga

fresh-ga is a [Fresh Framework](https://fresh.deno.dev/) plugin. It helps you to add [gtag](https://developers.google.com/tag-platform/gtagjs) to your site in seconds.

## Usage

### add to your import map

```json
// in your import_map.json
{
  "imports": {
    "ga/": "https://deno.land/x/fresh-ga@0.2.3/"
  }
}
```

### set GA_TRACKING_ID Environment Variable

```env
# in your .env
GA_TRACKING_ID=G-XXXXXXXXX-X

```

### setup your main.ts

```ts
// in your main.ts
import { gaPlugin } from "ga/mod.ts";

await start(manifest, {
  plugins: [
    // ...
    gaPlugin({ enableServerGa: true }), // if you want to use server side ga
    // ...
  ],
});
```
