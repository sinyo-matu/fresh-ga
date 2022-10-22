# fresh-ga

fresh-ga is a [Fresh Framework](https://fresh.deno.dev/) plugin. It helps you to add [gtag](https://developers.google.com/tag-platform/gtagjs) to your site in seconds.

## Usage

### add to your import map

```json
// in your import_map.json
{
  "imports": {
    "ga/": "https://deno.land/x/fresh-ga@0.1.0/"
  }
}
```

### setup your main.ts

```ts
// in your main.ts
import { gaPlugin } from "ga/mod.ts";

await start(manifest, {
  plugins: [
    // ...
    gaPlugin({ gaKey: "xxxxxxxxxx" }), //replace xxxxxxxxx with your gaKey
    // ...
  ],
});
```
