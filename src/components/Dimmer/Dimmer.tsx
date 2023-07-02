import classNames from "classnames";
import { ReactNode } from "react";

export type DimmerProps = {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
};

export const Dimmer = ({ className, children, isOpen }: DimmerProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={classNames(
            "fixed left-0 top-0 h-full w-full animate-fade-in bg-blackAlpha-600",
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};
