import {BuildTagsParams, MetaTag, OpenGraph} from "next-seo/lib/types";
import {SITE_NAME, TAGLINE, DESCRIPTION, SITE_URL, TWITTER_HANDLE} from "./constants";
import {LinkTag} from "types/seo";

const viewport =
  "width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover";

const metaTags: ReadonlyArray<MetaTag> = [
  {httpEquiv: "x-ua-compatible", content: "IE=Edge,Chrome=1"},
  {name: "Content-Type", content: "text/html;charset=utf-8"},
  {name: "viewport", content: viewport},
  {name: "application-name", content: SITE_NAME},
  {name: "apple-mobile-web-app-capable", content: "yes"},
  {name: "apple-mobile-web-app-status-bar-style", content: "default"},
  {name: "apple-mobile-web-app-title", content: SITE_NAME},
  // Allow telephone numbers in the HTML content to appear as hypertext links or not
  {name: "format-detection", content: "telephone=no"},
  {name: "msapplication-config", content: "/browserconfig.xml"},
  {name: "msapplication-TileColor", content: "#5F28D7"},
  {name: "msapplication-tap-highlight", content: "no"},
  {name: "theme-color", content: "#1F2937"}
];

const openGraph: OpenGraph = {
  title: `${SITE_NAME} — ${TAGLINE}`,
  type: "website",
  locale: "en_US", // en_IE
  site_name: SITE_NAME,
  url: SITE_URL
};

const linkTags: ReadonlyArray<LinkTag> = [
  // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  // { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' },
  // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  {rel: "manifest", href: "/manifest.json"},
  {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true"},
  {rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "true"}
];

export const SEO_CONFIG: BuildTagsParams = {
  titleTemplate: `%s — ${SITE_NAME}`,
  defaultTitle: `${SITE_NAME} — ${TAGLINE}`,
  description: DESCRIPTION,
  canonical: SITE_URL,
  languageAlternates: [{hrefLang: "en", href: SITE_URL}],
  additionalMetaTags: metaTags,
  openGraph,
  twitter: {
    handle: TWITTER_HANDLE,
    site: SITE_URL,
    cardType: "summary_large_image"
  },
  additionalLinkTags: linkTags
};

