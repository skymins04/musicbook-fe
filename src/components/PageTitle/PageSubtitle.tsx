import { Divider } from "@components";
import classNames from "classnames";
import { ReactNode } from "react";

export type PageSubtitleProps = {
  className?: string;
  children?: ReactNode;
  rightArea?: ReactNode;
  isShowDivider?: boolean;
};

export const PageSubtitle = ({ className, children,rightArea,isShowDivider }: PageSubtitleProps) => {
  return (
    <>
      <div className={classNames("w-full flex justify-between items-center", className)}>
        <h2 className="mb-10 text-[20px] text-gray-700 duration-200 dark:text-white font-bold">
          {children}
        </h2>
        {rightArea}
      </div>
      {isShowDivider && <Divider className="mb-20 dark:border-gray-700" />}
    </>
  );
};
