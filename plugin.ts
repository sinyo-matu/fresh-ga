const GA_TRACKING_ID = "GA_TRACKING_ID";

export default function main() {
  const ga_tracking_id = Deno.env.get(GA_TRACKING_ID);
  const gaTag = document.createElement("script");
  gaTag.src = `https://www.googletagmanager.com/gtag/js?id=${ga_tracking_id}`;
  gaTag.async = true;
  document.head.appendChild(gaTag);
  const s = document.createElement("script");
  s.textContent = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${ga_tracking_id}');`;
  document.head.appendChild(s);
}
