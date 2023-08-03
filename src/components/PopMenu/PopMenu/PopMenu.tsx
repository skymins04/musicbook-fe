import classNames from "classnames";
import { ReactNode } from "react";

export type PopMenuProps = {
  className?: string;
  wrapperClassName?: string;
  children: ReactNode;
};

export const PopMenu = ({
  className,
  wrapperClassName,
  children,
}: PopMenuProps) => {
  return (
    <div
      className={classNames(
        "overflow-y-auto overflow-x-hidden rounded-12 bg-white dark:bg-gray-700",
        wrapperClassName
      )}
    >
      <div
        className={classNames(
          "flex h-max flex-col items-stretch justify-center gap-4 py-10 shadow-md duration-200",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
