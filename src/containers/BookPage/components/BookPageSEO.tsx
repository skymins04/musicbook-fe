import { Book } from "@apis";
import { BaseSEO } from "@components";
import { HOST } from "@constants";
import { getBookId, getBookThumbnail, isEmptyTrimedString } from "@utils";

export type BookPageSEOProps = {
  book: Book;
};

export const BookPageSEO = ({ book }: BookPageSEOProps) => {
  const bookId = getBookId(book);
  const bookURL = `${HOST}/book/${bookId}`;
  const bookThumbnail = getBookThumbnail(book);
  const bookTitle = `${book.title} | 노래책 - 즐거운 음악 방송을 위한 신청곡 플랫폼`;
  const bookDescription = `${
    isEmptyTrimedString(book.description) ? "" : `${book.description} | `
  }즐거운 음악 방송을 위한 신청곡 플랫폼. 노래책에서는 귀가 사르르 녹는 꿀보이스들에게 신청곡을 보낼 수 있어요!`;
  const siteName = `노래책 - 즐거운 음악 방송을 위한 신청곡 플랫폼`;

  return (
    <BaseSEO
      title={bookTitle}
      description={bookDescription}
      thumbnail={bookThumbnail}
      url={bookURL}
      siteName={siteName}
    />
  );
};
