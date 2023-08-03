import { musicbookAxios } from "../client";

export const DELETERequestBlacklistById = async (userId: string) => {
  await musicbookAxios.delete(`/request/blacklist/${userId}`);
};
