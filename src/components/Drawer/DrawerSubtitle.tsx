import classNames from "classnames";
import { ReactNode } from "react";
import { Skeleton } from "../Skeleton";

export type DrawerSubtitleProps = {
  className?: string;
  isShow?: boolean;
  children: ReactNode;
};

export const DrawerSubtitle = ({
  className,
  isShow,
  children,
}: DrawerSubtitleProps) => {
  return (
    <h5
      className={classNames(
        "pb-4 pl-8 pt-8 text-16 font-bold text-gray-800 duration-200 dark:text-white",
        className
      )}
    >
      <Skeleton isShow={isShow}>{children}</Skeleton>
    </h5>
  );
};
