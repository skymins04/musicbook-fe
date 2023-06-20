import { musicbookAxios } from "../client";
import { Book } from "./book";

export const GETBookById = async (bookId: string): Promise<Book> => {
  const result = await musicbookAxios.get(`/book/${bookId}`);
  return result.data.data;
};
