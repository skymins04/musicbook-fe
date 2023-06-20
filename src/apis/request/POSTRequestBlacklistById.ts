import { musicbookAxios } from "../client";

export const POSTRequestBlacklistById = async (userId: string) => {
  await musicbookAxios.post(`/request/blacklist/${userId}`);
};
