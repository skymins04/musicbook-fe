import { musicbookAxios } from "@/apis/client";

export const PATCHWidgetPlaylistById = async (
  widgetId: string,
  options: {
    title?: string;
    theme?: string;
    customCSS?: string;
    fontSize?: number;
  }
) => {
  await musicbookAxios.patch(`/widget/playlist/${widgetId}`, options);
};
