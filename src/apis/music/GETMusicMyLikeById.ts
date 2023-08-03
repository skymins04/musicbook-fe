import { musicbookAxios } from "../client";

export const GETMusicMyLikeById = async (musicId: string): Promise<boolean> => {
  const result = await musicbookAxios.get(`/music/${musicId}/like/me`);
  return result.data.data;
};
