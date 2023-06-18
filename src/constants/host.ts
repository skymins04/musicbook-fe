export const DOMAIN =
  process.env.RELEASE_ENV === "production" ? "musicbook.kr" : "musicbook.dev";
export const DOT_DOMAIN = `.${DOMAIN}`;
export const API_HOST = `https://api.${DOMAIN}`;
