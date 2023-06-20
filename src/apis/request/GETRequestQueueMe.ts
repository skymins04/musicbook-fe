import { musicbookAxios } from "../client";
import { Request } from "./request";

export const GETRequestQueueMe = async (): Promise<Request[]> => {
  const result = await musicbookAxios.get("/request/queue/me");
  return result.data.data;
};
