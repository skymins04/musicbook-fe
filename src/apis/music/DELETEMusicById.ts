import { musicbookAxios } from "../client";

export const DELETEMusicById = async (musicId: string) => {
  await musicbookAxios.delete(`/music/${musicId}`);
};
