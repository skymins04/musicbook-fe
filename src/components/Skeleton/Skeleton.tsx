import classNames from "classnames";
import { ReactNode } from "react";

export type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
  innerClassName?: string;
  isShow?: boolean;
  isKeepWidth?: boolean;
  isAllowDuration?: boolean;
  children: ReactNode;
};

export const Skeleton = ({
  width,
  height,
  className,
  innerClassName,
  children,
  isShow,
  isKeepWidth,
  isAllowDuration,
}: SkeletonProps) => {
  return (
    <div
      className={classNames(
        "relative box-border h-max w-max max-w-full rounded-3",
        isKeepWidth && "min-w-max",
        isAllowDuration && "duration-200",
        !isShow && "overflow-hidden bg-gray-200 dark:bg-gray-800",
        className
      )}
      style={{
        width: !isShow ? width : undefined,
        height: !isShow ? height : undefined,
      }}
    >
      <div
        className={classNames(
          isShow ? "opacity-100" : "opacity-0",
          innerClassName
        )}
      >
        {children}
      </div>
      {!isShow && (
        <div className="absolute left-0 top-0 h-full animate-skeletonLoading bg-gray-300 shadow-[0_0_30px_30px_#CBD5E0] dark:bg-gray-600 dark:shadow-[0_0_30px_30px_#4A5568]"></div>
      )}
    </div>
  );
};
