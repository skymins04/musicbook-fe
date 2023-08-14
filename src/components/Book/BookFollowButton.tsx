import { Book } from "@apis";
import { Button, ButtonProps } from "@components";
import {
  useGetBookMyLikeById,
  useMutateBookLikeCreateById,
  useMutateBookLikeDelete,
} from "@fetchers";
import { useGlobalDisclosure } from "@hooks";
import { useBookContext } from "@providers";
import { getBookId } from "@utils";
import { MouseEvent } from "react";

export type BookFollowButtonProps = { book?: Book } & ButtonProps;

export const BookFollowButton = ({
  size,
  onClick,
  book: _book,
  ...props
}: BookFollowButtonProps) => {
  const book = _book ?? useBookContext();
  const bookId = getBookId(book);

  const { on: setOpenLoginDialog } = useGlobalDisclosure("login-dialog", false);

  const {
    data: isFollow,
    mutate: updateIsFollow,
    isLoading: isLoadingUpdateFollow,
  } = useGetBookMyLikeById(bookId);
  const { trigger: followBook, isMutating: isLoadingFollowBook } =
    useMutateBookLikeCreateById();
  const { trigger: unfollowBook, isMutating: isLoadingUnfollowBook } =
    useMutateBookLikeDelete();

  const isLoading =
    isLoadingUpdateFollow || isLoadingFollowBook || isLoadingUnfollowBook;

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (isFollow === undefined) {
      setOpenLoginDialog();
    } else {
      const fetcher = isFollow ? unfollowBook : followBook;
      fetcher({ bookId }).then(updateIsFollow);
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
