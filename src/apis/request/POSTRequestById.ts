import { musicbookAxios } from "../client";

export const POSTRequestById = async (musicId: string) => {
  await musicbookAxios.post(`/request/${musicId}`);
};
