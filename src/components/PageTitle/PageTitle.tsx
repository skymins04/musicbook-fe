import { Divider } from "@components";
import { ReactNode } from "react";

export type PageTitleProps = {
  children?: ReactNode;
  rightArea?: ReactNode;
  isShowDivider?: boolean;
};

export const PageTitle = ({ children,rightArea,isShowDivider = true }: PageTitleProps) => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="mb-10 text-[24px] text-gray-700 duration-200 dark:text-white font-bold">
          {children}
        </h1>
        {rightArea}
      </div>
      {isShowDivider && <Divider className="mb-20 dark:border-gray-700" />}
    </>
  );
};
