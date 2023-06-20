import { musicbookAxios } from "../client";
import { MusicConfig } from "./music";

export const GETMusicConfigById = async (
  musicId: string
): Promise<MusicConfig> => {
  const result = await musicbookAxios.get(`/music/${musicId}/config`);
  return result.data.data;
};
