import { musicbookAxios } from "../client";
import { MusicConfig } from "./music";

export const PATCHMusicConfigById = async (
  musicId: string,
  options: Partial<MusicConfig>
) => {
  await musicbookAxios.patch(`/music/${musicId}/config`, options);
};
