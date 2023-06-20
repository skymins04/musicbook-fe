import { musicbookAxios } from "../client";
import { BookConfig } from "./book";

export const PATCHBookMeConfig = async (options: Partial<BookConfig>) => {
  await musicbookAxios.patch("/book/me/config", options);
};
