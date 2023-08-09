import { ASSET_HOST } from "@constants/host";
import axios from "axios";

export type Notice = {
  type: "normal" | "incident";
  startAt: string;
  endAt: string;
  message: string;
  link: string;
};

export const GETNotice = async (): Promise<Notice | null> => {
  try {
    const result = await axios.get(
      `${ASSET_HOST}/assets/json/notice.json?v=${new Date().getTime()}`
    );
    return result.data;
  } catch (e) {
    return null;
  }
};
