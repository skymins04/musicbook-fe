import { musicbookAxios } from "../client";

export const POSTMusicLikeById = async (musicId: string) => {
  await musicbookAxios.post(`/music/${musicId}/like`);
};
