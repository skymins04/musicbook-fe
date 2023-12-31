import { Book, User } from "@apis";
import { Banner } from "@components";
import dynamic from "next/dynamic";
import { BookProfile } from "./components";
import { BookContextProvider } from "@providers";
import { BookPageSEO } from "./components/BookPageSEO";

const MusicCardList = dynamic(
  import("@components/MusicCardList").then((mod) => mod.MusicCardList)
);

export type BookPageProps = {
  user?: User;
  book: Book;
};

export const BookPage = ({ book }: BookPageProps) => {
  return (
    <>
      <BookPageSEO book={book} />
      <BookContextProvider book={book}>
        <BookProfile />
        <div className="box-border h-max w-full p-20 semi-tablet:w-full mobile:px-10">
          <MusicCardList
            bookId={book.id}
            isShowBookThumbnail={false}
            isShowBookTitle={false}
            rightArea={
              <Banner
                bannerId="desktop-1"
                variant="desktop-1"
                className="semi-tablet:hidden"
              />
            }
          />
        </div>
      </BookContextProvider>
    </>
  );
};
