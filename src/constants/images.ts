import { prependURL } from "@utils";
import { ASSET_HOST } from ".";

const COMMON_IMAGES = {
  LOGO_ICON: "/common/musicbook-logo-icon.svg",
  LOGO_ICON_DARK: "/common/musicbook-logo-icon-dark.svg",
  LOGO_TEXT: "/common/musicbook-logo-text.svg",
  LOGO_TEXT_DARK: "/common/musicbook-logo-text-dark.svg",
  DEFAULT_THUMBNAIL: "/common/musicbook-default-thumbnail.svg",
  DEFAULT_BANNER_DESKTOP: "/common/musicbook-default-banner-desktop.svg",
  DEFAULT_BANNER_MOBILE: "/common/musicbook-default-banner-mobile.svg",
  TWITCH_WHTIE: "/common/logo/twitch-white.svg",
  TWITCH_DARK: "/common/logo/twitch-dark.svg",
  GOOGLE_COLORED: "/common/logo/google-color.svg",
};

const FAVICON_IMAGES = {
  ANDROID_CHROME_192: "/icon/android-chrome-192x192.png",
  ANDROID_CHROME_512: "/icon/android-chrome-512x512.png",
  APPLE_TOUCH_ICON: "/icon/apple-touch-icon.png",
  WEB_16: "/icon/favicon-16x16.png",
  WEB_32: "/icon/favicon-32x32.png",
  WEB_ICO: "/icon/favicon.ico",
  MSTILE_150: "/icon/mstile-150x150.png",
  SAFARI_PINNED: "/icon/safari-pinned-tab.svg",
};

export const IMAGE_ASSET_ROOT_URL = `${ASSET_HOST}/assets/images`;
const prependImageAssetHostURL = (urls: Record<string, string>) => {
  for (const key of Object.keys(urls)) {
    urls[key] = prependURL(IMAGE_ASSET_ROOT_URL, urls[key]);
  }
};

[COMMON_IMAGES].forEach(prependImageAssetHostURL);

export const IMAGES = {
  COMMON: COMMON_IMAGES,
  FAVICON: FAVICON_IMAGES,
};
