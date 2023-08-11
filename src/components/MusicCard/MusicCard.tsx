import { Music } from "@apis";
import classNames from "classnames";
import { useBoolean } from "@/hooks";
import { Avatar } from "../Avatar";
import { Thumbnail } from "../Thumbnail";
import Link from "next/link";
import { clickStopPropagation } from "@/utils";
import { Skeleton } from "../Skeleton";
import { Bookmark } from "@mui/icons-material";

export type MusicCardType = "list" | "grid";

export type MusicCardProps = {
  className?: string;
  music: Music;
  type?: MusicCardType;
  isShowBookThumbnail?: boolean;
};

export const MusicCard = ({
  className,
  music,
  type = "grid",
  isShowBookThumbnail = true,
}: MusicCardProps) => {
  const [isLoadedBookThumbnail, setIsLoadedBookThumbnail] = useBoolean(false);
  const [isLoadedAlbumThumbnail, setIsLoadedAlbumThumbnail] = useBoolean(false);
  const [isLiked, setIsLiked] = useBoolean(false);

  const isShow = isLoadedBookThumbnail && isLoadedAlbumThumbnail;

  const musicSourceType = music.musicSourceOriginal ? "original" : "melon";
  const musicAlbumThumbnail =
    (musicSourceType === "original"
      ? music.musicSourceOriginal?.albumThumbnail
      : music.musicSourceMelon?.albumThumbnail500) || "";
  const musicPageHref = isShow ? `/music/${music.id}` : "";
  const bookPageHref = isShow ? `/book/${music.book?.customId}` : "";

  return (
    <button
      className={classNames(
        "relative w-full rounded-6 shadow-md duration-200 hover:scale-[1.005] hover:shadow-lg focus:outline-none",
        type === "grid" && "max-w-[200px]",
        className
      )}
    >
      <Link
        href={musicPageHref}
        className={classNames(
          "relative flex w-full items-stretch justify-center",
          type === "grid" && "flex-col"
        )}
      >
        <Thumbnail
          className={classNames(
            "overflow-hidden !rounded-none",
            type === "grid"
              ? "!rounded-t-6"
              : "!w-[20%] !min-w-[100px] !max-w-[100px] !rounded-l-6"
          )}
          src={musicAlbumThumbnail}
          alt={`${music.title} - ${music.book?.title}`}
          isShow={isShow}
          onLoad={() => setIsLoadedAlbumThumbnail.on()}
        >
          <div
            className={classNames(
              "absolute bottom-8 left-8 bg-green-100 font-bold text-green-800",
              type === "grid"
                ? "rounded-3 px-[5px] py-2 text-16"
                : "rounded-3 px-3 py-1 text-12"
            )}
          >
            {music.category}
          </div>
        </Thumbnail>
        <div
          className={classNames(
            "box-border flex w-full flex-col items-start gap-8 bg-white duration-200 dark:bg-gray-700",
            type === "grid"
              ? "justify-start rounded-b-6 px-10 pb-10 pt-8"
              : "justify-between rounded-r-6 p-20"
          )}
        >
          <div
            className={classNames(
              "box-border line-clamp-2 h-max break-all text-left text-18 font-bold leading-[17px] text-gray-700 duration-200 dark:text-white",
              type === "grid" ? "w-full" : "w-[calc(100%-42px)]"
            )}
          >
            <Skeleton isShow={isShow}>{music.title}</Skeleton>
          </div>
          <div className="box-border flex w-full items-stretch justify-between gap-8">
            {isShowBookThumbnail && (
              <Link
                className="h-[36px] w-[36px]"
                href={bookPageHref}
                onClick={clickStopPropagation}
              >
                <Avatar
                  className="!h-[36px] !w-[36px]"
                  src={
                    music.book?.thumbnailURL || music.broadcaster.profileImgURL
                  }
                  isShow={isShow}
                  onLoad={() => setIsLoadedBookThumbnail.on()}
                  onError={() => setIsLoadedBookThumbnail.on()}
                />
              </Link>
            )}
            <div className="flex w-full flex-col items-start justify-center gap-4 text-12 font-normal text-gray-500 duration-200 dark:text-gray-400">
              <Skeleton isShow={isShow}>
                <Link
                  href={bookPageHref}
                  className="hover:underline"
                  onClick={clickStopPropagation}
                >
                  {music.book?.title}
                </Link>
              </Skeleton>
              <Skeleton isShow={isShow}>
                <div>{`좋아요 ${music.likeCount.toLocaleString(
                  "ko-KR"
                )}개`}</div>
              </Skeleton>
            </div>
          </div>
        </div>
      </Link>
      <button
        className={classNames(
          "absolute -top-14 right-0",
          isLiked
            ? "text-teal-400 duration-200 hover:text-teal-300 dark:text-teal-200 dark:hover:text-teal-100"
            : "text-gray-400 duration-200 hover:text-gray-300 dark:text-gray-200 dark:hover:text-gray-100"
        )}
        onClick={(e) => {
          clickStopPropagation(e);
        }}
      >
        <Bookmark className="!text-[68px]" />
      </button>
    </button>
  );
};
