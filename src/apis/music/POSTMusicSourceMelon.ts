import { musicbookAxios } from "../client";

export const POSTMusicSourceMelon = async (musicId: string) => {
  await musicbookAxios.post("/music/source/melon", { id: musicId });
};
