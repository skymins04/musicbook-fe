import { useMutateGetBookMyLikeById, useMutateBookLikeCreateById, useMutateBookLikeDelete } from "@fetchers";
import { toast } from "react-hot-toast";

export const useBookFollow = (bookId: string, isFollow: boolean, callback?: (isFollow: boolean) => void) => {

  const {
    trigger: updateIsFollow,
    isMutating: isLoadingUpdateFollow,
  } = useMutateGetBookMyLikeById(bookId);
  const { trigger: followBook, isMutating: isLoadingFollowBook } =
    useMutateBookLikeCreateById();
  const { trigger: unfollowBook, isMutating: isLoadingUnfollowBook } =
    useMutateBookLikeDelete();

  const isLoading =
    isLoadingUpdateFollow || isLoadingFollowBook || isLoadingUnfollowBook;

  const toggleBookFollow = () => {
    const fetcher = isFollow ? unfollowBook : followBook;
    toast.promise(
      fetcher({ bookId })
        .then(updateIsFollow)
        .then(isFollow => !!isFollow)
        .then(callback),
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
  };

  return {toggleBookFollow, isLoading};
};