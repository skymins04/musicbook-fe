import { musicbookAxios } from "../client";

export const GETMusicLikeCountById = async (
  musicId: string
): Promise<number> => {
  const result = await musicbookAxios.get(`/music/${musicId}/like`);
  return result.data.data;
};
