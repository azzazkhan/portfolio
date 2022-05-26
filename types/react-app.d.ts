/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PUBLIC_URL: string;
    readonly APP_NAME: string;
    readonly APP_TAGLINE: string;
    readonly APP_DESCRIPTION: string;
    readonly SEO_KEYWORDS: string;
    readonly APP_STORY: string;
    readonly TWITTER_HANDLE: string;
  }
}

declare module "*.svg" {
  content: string;
  export default content;
}
