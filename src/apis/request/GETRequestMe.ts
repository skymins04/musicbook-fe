import { musicbookAxios } from "../client";
import { Request } from "./request";

export const GETRequestMe = async (): Promise<Request[]> => {
  const result = await musicbookAxios.get("/request/me");
  return result.data.data;
};
