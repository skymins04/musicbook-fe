import { Book } from "@apis";
import { Banner } from "@components";
import dynamic from "next/dynamic";
import { BookProfile } from "./components";

const MusicCardList = dynamic(
  import("@components/MusicCardList").then((mod) => mod.MusicCardList)
);

export type BookPageProps = {
  book: Book;
};

export const BookPage = ({ book }: BookPageProps) => {
  return (
    <>
      <BookProfile book={book} />
      <div className="box-border h-max w-full p-20 semi-tablet:w-full mobile:px-10">
        <MusicCardList
          bookId={book.id}
          rightArea={
            <Banner
              bannerId="desktop-1"
              variant="desktop-1"
              className="semi-tablet:hidden"
            />
          }
        />
      </div>
    </>
  );
};
