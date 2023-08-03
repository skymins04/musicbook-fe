import { musicbookAxios } from "@/apis/client";
import { WidgetPlaylist } from "./playlist";

export const GETWidgetPlaylist = async (): Promise<WidgetPlaylist[]> => {
  const result = await musicbookAxios.get("/widget/playlist");
  return result.data.data;
};
