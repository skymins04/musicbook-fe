import { musicbookAxios } from "@/apis/client";
import { WidgetPlaylist } from "./playlist";

export const POSTWidgetPlaylist = async (): Promise<WidgetPlaylist> => {
  const result = await musicbookAxios.post("/widget/playlist");
  return result.data.data;
};
