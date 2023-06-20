import { musicbookAxios } from "../client";
import { BookConfig } from "./book";

export const GETBookMeConfig = async (): Promise<BookConfig> => {
  const result = await musicbookAxios.get("/book/me/config");
  return result.data.data;
};
