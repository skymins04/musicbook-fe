import { musicbookAxios } from "../client";
import { Request } from "./request";

export const GETRequestQueueRecover = async (): Promise<Request[]> => {
  const result = await musicbookAxios.get("/request/queue/recover");
  return result.data.data;
};
