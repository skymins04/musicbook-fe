import { musicbookAxios } from "../client";

export const GETBookMyLikeById = async (bookId: string): Promise<boolean> => {
  const result = await musicbookAxios.get(`/book/${bookId}/like/me`);
  return result.data.data;
};
