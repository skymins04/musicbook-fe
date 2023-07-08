import { useGlobalDisclosure } from "@/hooks";
import classNames from "classnames";
import { Children, ReactNode, cloneElement, isValidElement } from "react";
import { Divider } from "../Divider";
import { Skeleton, SkeletonBaseProps } from "../Skeleton";

export type DrawerBaseProps = {
  isAllowMinified?: boolean;
};

export type DrawerProps = {
  className?: string;
  children: ReactNode;
} & SkeletonBaseProps &
  DrawerBaseProps;

export const Drawer = ({
  className,
  children,
  isAllowMinified,
  isShow,
}: DrawerProps) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement<any>(child, { isAllowMinified });
    }
    return child;
  });

  const { data: isMinifiedDrawer } = useGlobalDisclosure(
    "drawer-minified",
    false
  );

  const isMinified = isAllowMinified && isMinifiedDrawer;

  return (
    <div
      className={classNames(
        "box-border flex h-max flex-col items-stretch justify-start bg-white duration-200 dark:bg-gray-700",
        isMinified
          ? "w-[74px] min-w-[74px] px-[5px] py-[13px]"
          : "w-[300px] min-w-[300px] gap-10 px-10 py-20",
        className
      )}
    >
      {childrenWithProps}
      {!isMinified && (
        <>
          <Divider />
          <div className="box-border flex w-full flex-col items-start justify-center gap-[5px] px-10 text-12 font-normal duration-200">
            <div className="flex items-center justify-start w-full gap-10 text-gray-800 dark:text-white">
              <Skeleton isShow={isShow}>
                <a href="#">이용약관</a>
              </Skeleton>
              <Skeleton isShow={isShow}>
                <a href="#">개인정보처리방침</a>
              </Skeleton>
            </div>
            <Skeleton isShow={isShow}>
              <span className="w-full text-gray-500 break-all dark:text-gray-400">
                © 2023. 노래책 MUSICBOOK. All Rights Reserved.
              </span>
            </Skeleton>
          </div>
        </>
      )}
    </div>
  );
};
