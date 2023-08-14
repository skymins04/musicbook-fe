import toast from "react-hot-toast";
import { getBookId } from "@utils";
import { useBookContext } from "@providers";
import classNames from "classnames";
import { Book } from "@apis";

export type BookIdViewerProps = {
  className?: string;
  book?: Book;
};

export const BookIdViewer = ({ className, book: _book }: BookIdViewerProps) => {
  const book = _book ?? useBookContext();
  const bookId = getBookId(book);

  const handleClick = () => {
    toast.promise(navigator.clipboard.writeText(bookId), {
      loading: "복사중...",
      success: "클립보드에 노래책 ID가 복사되었습니다!",
      error: "클립보드에 노래책 ID 복사를 실패했습니다.",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "w-full max-w-max overflow-hidden text-ellipsis whitespace-nowrap text-left hover:underline",
        className
      )}
    >
      {bookId}
    </button>
  );
};
