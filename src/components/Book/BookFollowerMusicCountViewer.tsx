import classNames from "classnames";
import { useBookContext } from "@providers";
import { Book } from "@apis";

export type BookFollwerMusicCountViewerProps = {
  className?: string;
  book?: Book;
};

export const BookFollwerMusicCountViewer = ({
  className,
  book: _book,
}: BookFollwerMusicCountViewerProps) => {
  const book = _book ?? useBookContext();

  return (
    <div
      className={classNames(
        "w-full overflow-hidden text-ellipsis whitespace-nowrap",
        className
      )}
    >{`팔로워 ${book.likeCount}명 · 수록곡 ${book.musics?.length ?? 0}개`}</div>
  );
};
