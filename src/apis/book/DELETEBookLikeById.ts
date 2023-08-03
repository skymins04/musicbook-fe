import { musicbookAxios } from "../client";

export const DELETEBookLikeById = async (bookId: string) => {
  await musicbookAxios.delete(`/book/${bookId}/like`);
};
