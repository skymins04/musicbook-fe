import { musicbookAxios } from "../client";

export const DELETEMusicLikeById = async (musicId: string) => {
  await musicbookAxios.delete(`/music/${musicId}/like`);
};
