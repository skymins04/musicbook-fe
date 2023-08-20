import { Divider } from "@components";
import { ReactNode } from "react";

export type PageTitleProps = {
  children?: ReactNode;
};

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <>
      <h1 className="mb-10 text-[32px] text-gray-700 duration-200 dark:text-white">
        {children}
      </h1>
      <Divider className="mb-20 dark:border-gray-700" />
    </>
  );
};
