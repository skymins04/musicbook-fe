import classNames from "classnames";
import { ReactNode } from "react";
import { Skeleton, SkeletonBaseProps } from "../Skeleton";

export type DrawerTitleProps = {
  className?: string;
  children: ReactNode;
} & SkeletonBaseProps;

export const DrawerTitle = ({
  className,
  children,
  isShow,
}: DrawerTitleProps) => {
  return (
    <h1
      className={classNames(
        "pl-8 text-20 font-bold text-gray-700 duration-200 dark:text-white",
        className
      )}
    >
      <Skeleton isShow={isShow}>{children}</Skeleton>
    </h1>
  );
};
