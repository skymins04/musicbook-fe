import { ProfileImage, Skeleton, SkeletonBaseProps } from "@components";
import classNames from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

export type SearchBookResultCardProps = {
  src: string;
  title: string;
  id: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  SkeletonBaseProps;

export const SearchBookResultCard = ({
  isShow,
  src,
  title,
  id,
  onClick,
  ...props
}: SearchBookResultCardProps) => {
  return (
    <Link href={`/book/${id}`} className="h-max w-max select-none">
      <button
        {...props}
        className={classNames(
          "group box-border flex h-[95px] w-[100px] flex-col items-center justify-start gap-6 rounded-6 bg-white px-12 py-8 text-gray-700 duration-200 focus:outline-none dark:bg-gray-700 dark:text-white",
          isShow &&
            "hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:active:bg-gray-900"
        )}
        onClick={isShow ? onClick : undefined}
      >
        <ProfileImage
          isShow={isShow}
          className="max-h-[57px] max-w-[57px]"
          src={src}
        />
        <Skeleton isShow={isShow}>
          <div className="line-clamp-2 w-full break-all text-center text-[8px]">
            {title}
          </div>
        </Skeleton>
      </button>
    </Link>
  );
};
