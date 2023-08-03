import { prependURL } from "@/utils";
import { ASSET_HOST } from ".";

const COMMON_IMAGES = {
  LOGO_ICON: "/common/musicbook-logo-icon.svg",
  LOGO_ICON_DARK: "/common/musicbook-logo-icon-dark.svg",
  LOGO_TEXT: "/common/musicbook-logo-text.svg",
  LOGO_TEXT_DARK: "/common/musicbook-logo-text-dark.svg",
  DEFAULT_THUMBNAIL: "/common/musicbook-default-thumbnail.svg",
  TWITCH_WHTIE: "/common/logo/twitch-white.svg",
  TWITCH_DARK: "/common/logo/twitch-dark.svg",
  GOOGLE_COLORED: "/common/logo/google-color.svg",
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
};
