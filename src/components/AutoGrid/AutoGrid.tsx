import classNames from "classnames";
import { ReactNode } from "react";

export type AutoGridProps = {
  children: ReactNode;
  className?: string;
  isGridOff?: boolean;
};

export const AutoGrid = ({
  children,
  className,
  isGridOff = false,
}: AutoGridProps) => {
  return (
    <div
      className={classNames(
        !isGridOff &&
          "grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-20",
        className
      )}
    >
      {children}
    </div>
  );
};
