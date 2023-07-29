export default function main({ gaTrackingId }: { gaTrackingId: string }) {
  const gaTag = document.createElement("script");
  gaTag.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
  gaTag.async = true;
  document.head.appendChild(gaTag);
  const s = document.createElement("script");
  s.textContent = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaTrackingId}');`;
  document.head.appendChild(s);
}
