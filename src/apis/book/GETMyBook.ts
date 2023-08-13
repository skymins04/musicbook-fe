import { musicbookAxios } from "../client";
import { Book } from "./book";

export const GETMyBook = async (): Promise<Book | undefined> => {
  try {
    const result = await musicbookAxios.get("/book/me");
    return result.data.data;
  } catch (e) {
    return undefined;
  }
};
