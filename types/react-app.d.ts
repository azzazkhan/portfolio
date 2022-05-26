/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly NEXT_PUBLIC_APP_NAME: string;
    readonly NEXT_PUBLIC_APP_DESCRIPTION: string;
    readonly NEXT_PUBLIC_APP_TAGLINE: string;
    readonly NEXT_PUBLIC_APP_URL: string;
    readonly NEXT_PUBLIC_API_URL: string;
    readonly NEXT_PUBLIC_SEO_KEYWORDS: string;
    readonly NEXT_PUBLIC_APP_STORY: string;
    readonly NEXT_PUBLIC_TWITTER_HANDLE: string;
  }
}

declare module "*.svg" {
  content: string;
  export default content;
}
