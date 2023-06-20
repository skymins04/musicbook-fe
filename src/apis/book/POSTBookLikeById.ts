import { musicbookAxios } from "../client";

export const POSTBookLikeById = async (bookId: string) => {
  await musicbookAxios.post(`/book/${bookId}/like`);
};
