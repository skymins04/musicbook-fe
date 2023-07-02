import classNames from "classnames";
import { ReactNode } from "react";

export type DimmerProps = {
  className?: string;
  children?: ReactNode;
};

export const Dimmer = ({ className, children }: DimmerProps) => {
  return (
    <div
      className={classNames(
        "fixed left-0 top-0 h-full w-full bg-blackAlpha-600",
        className
      )}
    >
      {children}
    </div>
  );
};
