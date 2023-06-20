import { musicbookAxios } from "../client";
import { MusicConfig } from "./music";

export const PATCHMusicConfigById = async (
  musicId: string,
  options: Partial<MusicConfig>
) => {
  return musicbookAxios.patch(`/music/${musicId}/config`, options);
};
