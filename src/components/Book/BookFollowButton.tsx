import { Book } from "@apis";
import { Button, ButtonProps } from "@components";
import { useBookFollow, useGlobalDisclosure } from "@hooks";
import { useBookContext, useUserContext } from "@providers";
import { getBookId } from "@utils";
import { MouseEvent, useState } from "react";

export type BookFollowButtonProps = { book?: Book } & ButtonProps;

export const BookFollowButton = ({
  size,
  onClick,
  book: _book,
  ...props
}: BookFollowButtonProps) => {
  const user = useUserContext();
  const book = _book ?? useBookContext();
  const bookId = getBookId(book);

  const { on: setOpenLoginDialog } = useGlobalDisclosure("login-dialog", false);

  const [isFollow, setIsFollow] = useState(!!book.bookLikes && book.bookLikes.length !== 0);
  const { toggleBookFollow, isLoading } = useBookFollow(bookId, isFollow, setIsFollow);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (user === undefined) {
      setOpenLoginDialog();
    } else {
      toggleBookFollow();
    }

    onClick && onClick(e);
  };

  return (
    <Button
      {...props}
      isLoading={isLoading}
      size={size ?? "sm"}
      color={isFollow ? "secondary" : "primary"}
      onClick={handleClick}
    >
      {isFollow ? "팔로우중" : "팔로우"}
    </Button>
  );
};
