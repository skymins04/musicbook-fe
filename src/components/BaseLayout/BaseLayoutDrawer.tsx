import { useGlobalDisclosure } from "@/hooks";
import classNames from "classnames";
import { ReactNode } from "react";

export type BaseLayoutDrawerProps = {
  children: ReactNode;
};

export const BaseLayoutDrawer = ({ children }: BaseLayoutDrawerProps) => {
  const { data: isDrawerMinified } = useGlobalDisclosure(
    "drawer-minified",
    false
  );

  return (
    <div
      className={classNames(
        "order-1 flex w-[300px] min-w-[300px] items-stretch overflow-auto overflow-x-hidden bg-white duration-100 dark:bg-gray-700 tablet:w-[74px] tablet:min-w-[74px] mobile:hidden",
        isDrawerMinified && "!w-[74px] !min-w-[74px] overflow-y-hidden"
      )}
    >
      {children}
    </div>
  );
};
