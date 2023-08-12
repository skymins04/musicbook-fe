import { JSONS } from "@constants";
import { getBypassDiskCacheURL } from "@utils";
import axios from "axios";

export type Notice = {
  type: "normal" | "incident";
  startAt: string | null;
  endAt: string | null;
  message: string;
  link: string;
};

export const GETNotice = async (): Promise<Notice | undefined> => {
  try {
    const result = await axios.get(getBypassDiskCacheURL(JSONS.COMMON.NOTICE));
    return result.data;
  } catch (e) {
    return undefined;
  }
};
