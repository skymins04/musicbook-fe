import { musicbookAxios } from "../client";
import { Book } from "./book";

export const GETBookMe = async (): Promise<Book> => {
  const result = await musicbookAxios.get("/book/me");
  return result.data;
};
