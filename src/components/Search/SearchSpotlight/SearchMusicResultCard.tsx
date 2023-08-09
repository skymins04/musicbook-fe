import { ProfileImage } from "@components/ProfileImage";
import { Skeleton, SkeletonBaseProps } from "@components/Skeleton";
import { IMAGES } from "@constants/images";
import classNames from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

export type SearchMusicResultCardProps = {
  src: string;
  title: string;
  id: string;
  bookTitle: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  SkeletonBaseProps;

export const SearchMusicResultCard = ({
  src,
  title,
  id,
  bookTitle,
  isShow,
  onClick,
  ...props
}: SearchMusicResultCardProps) => {
  return (
    <Link href={`/music/${id}`} className="h-max w-full select-none">
      <button
        {...props}
        className={classNames(
          "group box-border flex w-full items-center justify-start gap-10 rounded-6 bg-white px-10 py-8 text-gray-700 duration-200 focus:outline-none dark:bg-gray-700 dark:text-white",
          isShow &&
            "hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:active:bg-gray-900"
        )}
        onClick={isShow ? onClick : undefined}
      >
        <div className="relative h-32 w-32">
          <ProfileImage
            isShow={isShow}
            src={src}
            fallbackImage={
              <img src={IMAGES.COMMON.DEFAULT_THUMBNAIL} alt="asdf" />
            }
          />
        </div>
        <Skeleton isShow={isShow}>
          <div className="w-full">
            <div className="line-clamp-2 w-full overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-14">
              {title}
            </div>
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left text-12 text-gray-400">
              {bookTitle}
            </div>
          </div>
        </Skeleton>
      </button>
    </Link>
  );
};
