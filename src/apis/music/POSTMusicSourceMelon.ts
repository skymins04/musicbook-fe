import { musicbookAxios } from "../client";

export const POSTMusicSourceMelon = async (melonSongId: string) => {
  await musicbookAxios.post("/music/source/melon", { id: melonSongId });
};
