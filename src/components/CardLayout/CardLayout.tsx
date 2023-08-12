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
        "grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] flex-col gap-20 tablet:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] semi-tablet:flex semi-tablet:gap-12",
        className
      )}
    >
      {children}
    </div>
  );
};
