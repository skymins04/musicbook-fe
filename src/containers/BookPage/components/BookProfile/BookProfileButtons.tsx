import Link from "next/link";
import { Button } from "@components";
import { useGetMyBook } from "@fetchers";
import { useBookContext } from "@providers";
import { BookFollowButton } from "@components";
import { Book } from "@apis";

export type BookProfileButtonsProps = {
  book?: Book;
};

export const BookProfileButtons = ({
  book: _book,
}: BookProfileButtonsProps) => {
  const book = _book ?? useBookContext();
  const { data: myBook } = useGetMyBook();

  const isMyBook = myBook?.id === book.id;

  return isMyBook ? (
    <>
      <Button size="sm">수록곡 추가</Button>
      <Link href="">
        <Button size="sm" color="secondary">
          노래책 관리
        </Button>
      </Link>
    </>
  ) : (
    <BookFollowButton />
  );
};
