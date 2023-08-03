import classNames from "classnames";
import { ReactNode } from "react";
import { Skeleton, SkeletonBaseProps } from "../Skeleton";

export type DrawerSubtitleProps = {
  className?: string;
  children: ReactNode;
} & SkeletonBaseProps;

export const DrawerSubtitle = ({
  className,
  isShow,
  children,
}: DrawerSubtitleProps) => {
  return (
    <h2
      className={classNames(
        "pb-4 pl-8 pt-8 text-16 font-bold text-gray-700 duration-200 dark:text-white",
        className
      )}
    >
      <Skeleton isShow={isShow}>{children}</Skeleton>
    </h2>
  );
};
