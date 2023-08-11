import classNames from "classnames";
import { ReactNode } from "react";

export type CardLayoutProps = {
  children: ReactNode;
  className?: string;
};

export const CardLayout = ({ children, className }: CardLayoutProps) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] flex-col gap-20 semi-tablet:flex semi-tablet:gap-10",
        className
      )}
    >
      {children}
    </div>
  );
};
