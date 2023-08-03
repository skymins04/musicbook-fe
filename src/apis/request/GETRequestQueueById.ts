import { musicbookAxios } from "../client";
import { Request } from "./request";

export const GETRequestQueueById = async (
  bookId: string
): Promise<Request[]> => {
  const result = await musicbookAxios.get(`/request/queue/${bookId}`);
  return result.data.data;
};
