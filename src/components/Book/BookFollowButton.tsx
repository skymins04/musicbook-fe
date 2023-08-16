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
import toast from "react-hot-toast";

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
      toast.promise(
        fetcher({ bookId }).then(updateIsFollow),
        {
          loading: isFollow ? "팔로우 해제 처리중..." : "팔로우 처리중...",
          success: isFollow ? "팔로우 해제되었습니다." : "팔로우되었습니다!",
          error: `팔로우${
            isFollow ? " 해제" : ""
          } 처리 중 오류가 발생했습니다.`,
        },
        {
          success: {
            icon: isFollow ? "😭" : undefined,
          },
        }
      );
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
