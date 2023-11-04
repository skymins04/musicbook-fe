import { Book } from "@apis";
import { SearchBookResultCard } from "./SearchBookResultCard";
import { getBookId, getBookThumbnail } from "@utils";

export type SearchSpotlightBookResultProps = {
  books: Book[];
  onClick?: () => void;
};

export const SearchSpotlightBookResult = ({
  books,
  onClick
}: SearchSpotlightBookResultProps) => {
  return (
    <div className="flex h-full w-max items-center justify-start gap-3">
      {books.map((book) => (
        <SearchBookResultCard
          isShow
          key={book.id}
          id={getBookId(book)}
          title={book.title}
          src={getBookThumbnail(book)}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
