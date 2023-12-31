import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import { Bookmark } from "@mui/icons-material";
import { ProfileImage } from "@components";
import { GETMusicLikeCountById, Music } from "@apis";
import { useBoolean } from "@/hooks";
import { clickStopPropagation, getBookId } from "@/utils";
import { Thumbnail } from "../Thumbnail";
import { Skeleton } from "../Skeleton";
import {
  useMutateMusicLikeCrateById,
  useMutateMusicLikeDeleteById,
} from "@fetchers";
import toast from "react-hot-toast";

export type MusicCardType = "list" | "grid";

export type MusicCardProps = {
  className?: string;
  music: Music;
  type?: MusicCardType;
  isShowBookThumbnail?: boolean;
  isShowBookTitle?: boolean;
};

export const MusicCard = ({
  className,
  music,
  type = "grid",
  isShowBookThumbnail = true,
  isShowBookTitle = true,
}: MusicCardProps) => {
  const [isLoadedBookThumbnail, setIsLoadedBookThumbnail] = useBoolean(false);
  const [isLoadedAlbumThumbnail, setIsLoadedAlbumThumbnail] = useBoolean(false);
  const [isLiked, { toggle: toggleLike }] = useBoolean(
    music.musicLikes?.length !== 0 ?? false
  );
  const [likeCount, setLikeCount] = useState(music.likeCount);

  const { trigger: createMusicLikeById, isMutating: isLoadingCreateMusicLike } =
    useMutateMusicLikeCrateById();
  const { trigger: deleteMusicLikeById, isMutating: isLoadingDeleteMusicLike } =
    useMutateMusicLikeDeleteById();

  const isLoadingBookMark =
    isLoadingCreateMusicLike || isLoadingDeleteMusicLike;

  const router = useRouter();

  const isShow =
    (!isShowBookThumbnail || isLoadedBookThumbnail) && isLoadedAlbumThumbnail;

  // TODO: 다른 음원 프로바이더가 쉽게 추가될 수 있도록 확장성과 관련된 리펙터링이 이루어져야 함.
  const musicSourceType = music.musicSourceOriginal ? "original" : "melon";
  const musicAlbumThumbnail =
    (musicSourceType === "original"
      ? music.musicSourceOriginal?.albumThumbnail
      : music.musicSourceMelon?.albumThumbnail500 ||
        music.musicSourceMelon?.albumThumbnail200) || "";
  const musicPageHref = isShow ? `/music/${music.id}` : "";
  const bookPageHref = isShow ? `/book/${getBookId(music.book!)}` : "";

  const handleClickCard = useCallback(() => {
    if (isShow) {
      router.push(musicPageHref);
    }
  }, [isShow, router, musicPageHref]);

  const handleClickBookMark = () => {
    if (isLoadingBookMark) return;
    const fetcher = isLiked ? deleteMusicLikeById : createMusicLikeById;
    toast.promise(
      fetcher({ musicId: music.id })
        .then(() => GETMusicLikeCountById(music.id))
        .then((likeCount) => setLikeCount(likeCount))
        .then(toggleLike),
      {
        loading: isLiked ? "좋아요 해제 처리중..." : "좋아요 처리중...",
        success: isLiked ? "좋아요가 해제되었습니다." : "좋아요했습니다!",
        error: "처리과정에서 문제가 발생했습니다.",
      }
    );
  };

  return (
    <button
      className={classNames(
        "relative w-full rounded-6 shadow-md duration-200 hover:scale-[1.005] hover:shadow-lg focus:outline-none",
        type === "grid" && "max-w-[200px]",
        className
      )}
      onClick={handleClickCard}
    >
      <div
        className={classNames(
          "relative flex w-full items-stretch justify-between",
          type === "grid" && "flex-col"
        )}
      >
        <Link href={musicPageHref}>
          <Thumbnail
            className={classNames(
              "overflow-hidden !rounded-none",
              type === "grid"
                ? "!rounded-t-6"
                : "!w-[20%] !min-w-[120px] !max-w-[120px] !rounded-l-6"
            )}
            src={musicAlbumThumbnail}
            alt={`${music.title} - ${music.book?.title}`}
            isShow={isShow}
            onLoad={() => setIsLoadedAlbumThumbnail.on()}
          >
            <div
              className={classNames(
                "absolute bottom-8 left-8 bg-green-100 text-12 font-bold text-green-800",
                type === "grid"
                  ? "rounded-3 px-[5px] py-2"
                  : "rounded-3 px-3 py-1"
              )}
            >
              {music.category}
            </div>
          </Thumbnail>
        </Link>
        <div
          className={classNames(
            "box-border flex flex-col items-start gap-8 bg-white duration-200 dark:bg-gray-700",
            type === "grid"
              ? "w-full justify-start rounded-b-6 px-10 pb-10 pt-8"
              : "w-[calc(100%-120px)] justify-between rounded-r-6 p-20"
          )}
        >
          <Link href={musicPageHref} className="w-full">
            <div
              className={classNames(
                "box-border line-clamp-2 h-[2em] break-all text-left text-14 font-normal leading-[14px] text-gray-700 duration-200 dark:text-white",
                type === "grid" ? "w-full" : "w-[calc(100%-42px)]"
              )}
            >
              <Skeleton className="max-h-[2em]" isShow={isShow}>
                {music.title}
              </Skeleton>
            </div>
          </Link>
          <div className="box-border flex w-full items-stretch justify-between gap-8">
            {isShowBookThumbnail && (
              <Link
                className="h-[36px] w-[36px]"
                href={bookPageHref}
                onClick={clickStopPropagation}
              >
                <ProfileImage
                  className="!h-[36px] !w-[36px]"
                  src={
                    music.book?.thumbnailURL || music.broadcaster.profileImgURL
                  }
                  isShow={isShow}
                  onLoad={setIsLoadedBookThumbnail.on}
                  onError={setIsLoadedBookThumbnail.on}
                />
              </Link>
            )}
            <div className="flex w-[calc(100%-44px)] flex-col items-start justify-center gap-4 text-12 font-normal text-gray-600 duration-200 dark:text-gray-400">
              {isShowBookTitle && (
                <Skeleton isShow={isShow}>
                  <Link
                    href={bookPageHref}
                    className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-left hover:underline"
                    onClick={clickStopPropagation}
                  >
                    {music.book?.title}
                  </Link>
                </Skeleton>
              )}
              <Skeleton isShow={isShow}>
                <span className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-left">{`좋아요 ${likeCount.toLocaleString(
                  "ko-KR"
                )}개`}</span>
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "absolute -top-14 right-0 cursor-pointer",
          isLiked
            ? "text-teal-400 duration-200 hover:text-teal-300 dark:text-teal-200 dark:hover:text-teal-100"
            : "text-gray-400 duration-200 hover:text-gray-300 dark:text-gray-200 dark:hover:text-gray-100"
        )}
        onClick={(e) => {
          clickStopPropagation(e);
          handleClickBookMark();
        }}
      >
        <Bookmark className="!text-[68px]" />
      </div>
    </button>
  );
};
