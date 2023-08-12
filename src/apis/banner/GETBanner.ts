import { JSONS } from "@constants";
import { getBypassDiskCacheURL } from "@utils";
import axios from "axios";

export type Banner = {
  id: string;
  title: string;
  startAt: string | null;
  endAt: string | null;
  src: string;
  href: string | null;
};

export type BannerJSON = Record<string, Banner[]>;

export const GETBanner = async () => {
  try {
    const result = await axios.get(getBypassDiskCacheURL(JSONS.COMMON.BANNER));
    return result.data;
  } catch (e) {
    return undefined;
  }
};
