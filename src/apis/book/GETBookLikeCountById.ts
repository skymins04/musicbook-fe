import { musicbookAxios } from "../client";

export const GETBookLikeCountById = async (bookId: string): Promise<number> => {
  const result = await musicbookAxios.get(`/book/${bookId}/like`);
  return result.data.data;
};
