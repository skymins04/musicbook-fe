import { Book } from "@apis";
import { BookProfileBackgroundImage } from "./BookProfileBackgroundImage";
import { BookProfileInfo } from "./BookProfileInfo";

export type BookProfileBaseProps = {
  book: Book;
};

export type BookProfileProps = BookProfileBaseProps;

export const BookProfile = ({ book }: BookProfileProps) => {
  return (
    <>
      <BookProfileBackgroundImage book={book} />
      <BookProfileInfo book={book} />
    </>
  );
};
