import { musicbookAxios } from "../client";

export const GETMyBookLikeCount = async (): Promise<number> => {
  const result = await musicbookAxios.get("/book/me/like");
  return result.data.data;
};
