import { musicbookAxios } from "@/apis/client";

export const DELETEWidgetPlaylistById = async (widgetId: string) => {
  await musicbookAxios.delete(`/widget/playlist/${widgetId}`);
};
