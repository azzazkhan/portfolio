export const SITE_NAME = "NovelsCO";
export const TAGLINE = "Read your favorite novels";
export const DESCRIPTION =
  "Read your favorite Japanese, Chinese and Korean novels in English and other languages for FREE!";
export const KEYWORDS =
  "novels, light, web, chinese, korean-novels, japanese, english, translate, free, zero, cost, no-payment, updated, famous";
export const SITE_URL = "http://localhost:3000";
export const API_URL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;
export const LOGO_URI = SITE_URL + "/logo.png";
export const SITE_ABOUT =
  "Read your favorite novel of any genre in any language for free! Our team constantly look after to your requests so we can provide you with the best content. Support us to make this free forever, your small support can make a huge change on this fantasy world.\n\n**NovelsCO** and **Novels World** are registered trademarks in U.S and elsewhere.";
export const TWITTER_HANDLE =
  "@" +
  SITE_NAME.toLocaleLowerCase()
    .replace(/([^a-z0-9\s])/gi, "")
    .replace(/\s/, "_");

// Limits and site config
export const MAX_LIBRARY_ITEMS = 10;

const invalidCredentialsMessage = "Invalid email or password!";

export const AUTH_ERROR_MESSAGES = {
  "invalid-argument": "Cracked client detected! Report has been sent to admins!",
  "auth/invalid-email": invalidCredentialsMessage,
  "auth/user-not-found": invalidCredentialsMessage,
  "auth/wrong-password": invalidCredentialsMessage,
  "auth/user-disabled": "This account is banned!",
  unknown: "An unknown error occurred!",
  "promise/reject": `Cloud not connect to ${SITE_NAME} servers!`,
  "invalid-login-fields": "Please recheck your email and password!",
  internal: "The server has encountered an error!"
};

