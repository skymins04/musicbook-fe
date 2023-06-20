import { Book } from "../book";
import { Music } from "../music";
import { User } from "../user";

export type Request = {
  id: string;
  isPaid: boolean;
  isPlayed: boolean;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  viewer: User;
  broadcaster: User;
  music: Music;
  book: Book;
};

export type RequestBlacklistUser = {
  id: string;
  createdAt: string;
  user: User;
  book: Book;
};
