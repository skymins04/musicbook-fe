import { Book } from "@apis";

export const getBookId = ({ id, customId }: Book) => {
  return customId ? `@${customId}` : id;
};
