import { AxiosRequestConfig } from "axios";
import { musicbookAxios } from "../client";
import { Book } from "./book";

export const GETBookById = async (bookId: string, options?: AxiosRequestConfig<any>): Promise<Book> => {
  const result = await musicbookAxios.get(`/book/${bookId}`, options);
  return result.data.data;
};
