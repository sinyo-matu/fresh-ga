import { GaConfig } from "./index.ts";

export default function main(config: GaConfig) {
  const gaTag = document.createElement("script");
  gaTag.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaKey}`;
  gaTag.async = true;
  document.head.appendChild(gaTag);
  const s = document.createElement("script");
  s.textContent = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${config.gaKey}');`;
  document.head.appendChild(s);
}
