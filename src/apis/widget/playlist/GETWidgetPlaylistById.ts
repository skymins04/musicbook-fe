import { musicbookAxios } from "@apis/client";
import { WidgetPlaylist } from "./playlist";

export const GETWidgetPlaylistById = async (
  widgetId: string
): Promise<WidgetPlaylist> => {
  const result = await musicbookAxios.get(`/widget/playlist/${widgetId}`);
  return result.data.data;
};
