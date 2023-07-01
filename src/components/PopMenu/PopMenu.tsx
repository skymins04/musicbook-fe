import classNames from "classnames";
import { ReactNode } from "react";

export type PopMenuProps = {
  className?: string;
  children: ReactNode;
};

export const PopMenu = ({ className, children }: PopMenuProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-stretch justify-center gap-10 rounded-12 bg-white py-10 shadow-md dark:bg-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};
