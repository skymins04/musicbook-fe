import toast from "react-hot-toast";
import { BookProfileBaseProps } from "./BookProfile";
import { getBookId } from "@utils";

export type BookProfileIdButtonProps = BookProfileBaseProps;

export const BookProfileIdButton = ({ book }: BookProfileIdButtonProps) => {
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
      className="w-full max-w-max overflow-hidden text-ellipsis whitespace-nowrap text-left hover:underline"
    >
      {bookId}
    </button>
  );
};
