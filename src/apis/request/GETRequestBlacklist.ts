import { musicbookAxios } from "../client";
import { RequestBlacklistUser } from "./request";

export const GETRequestBlacklist = async (): Promise<
  RequestBlacklistUser[]
> => {
  const result = await musicbookAxios.get("/request/blacklist");
  return result.data.data;
};
