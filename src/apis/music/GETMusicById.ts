import { musicbookAxios } from "../client";
import { Music } from "./music";

export const GETMusicById = async (musicId: string): Promise<Music> => {
  const result = await musicbookAxios.get(`/music/${musicId}`);
  return result.data.data;
};
