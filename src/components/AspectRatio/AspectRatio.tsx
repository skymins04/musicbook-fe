import classNames from "classnames";
import { ReactNode } from "react";

export type AspectRatioProps = {
  ratio: number;
  children?: ReactNode;
  className?: string;
  contentAreaClassName?: string;
};

export const AspectRatio = ({
  ratio,
  children,
  className,
  contentAreaClassName,
}: AspectRatioProps) => {
  return (
    <div className={classNames(`relative block`, className)}>
      <div
        className="block w-full"
        style={{ paddingBottom: `${100 / ratio}%` }}
      >
        <div
          className={classNames(
            "absolute left-0 top-0 h-full w-full",
            contentAreaClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
