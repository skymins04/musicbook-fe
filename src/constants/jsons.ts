import { prependURL } from "@utils";
import { ASSET_HOST } from "./host";

const COMMON_JSON = {
  NOTICE: "/notice.json",
};

export const JSON_ASSET_ROOT_URL = `${ASSET_HOST}/assets/json`;
const prependJsonAssetHostURL = (urls: Record<string, string>) => {
  for (const key of Object.keys(urls)) {
    urls[key] = prependURL(JSON_ASSET_ROOT_URL, urls[key]);
  }
};

[COMMON_JSON].forEach(prependJsonAssetHostURL);

export const JSONS = {
  COMMON: COMMON_JSON,
  MANIFEST: "/manifest.json",
};
