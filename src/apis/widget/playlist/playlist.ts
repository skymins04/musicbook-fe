import { Book, User } from "@apis";

export type WidgetPlaylist = {
  id: string;
  title: string;
  theme: string;
  fontSize: number;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  user?: User;
  book?: Book;
};
