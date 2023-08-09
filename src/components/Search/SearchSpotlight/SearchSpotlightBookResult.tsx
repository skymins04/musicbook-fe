import { Book } from "@apis/book";
import { SearchBookResultCard } from "./SearchBookResultCard";

export type SearchSpotlightBookResultProps = {
  books: Book[];
};

export const SearchSpotlightBookResult = ({
  books,
}: SearchSpotlightBookResultProps) => {
  return (
    <div className="flex h-full w-max items-center justify-start gap-3">
      {books.map((book) => (
        <SearchBookResultCard
          isShow
          key={book.id}
          id={book.customId}
          title={book.title}
          src={book.thumbnailURL || book.broadcaster?.profileImgURL || ""}
        />
      ))}
    </div>
  );
};
