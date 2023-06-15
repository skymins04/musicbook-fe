import { useGlobalDisclosure } from "@/hooks";
import classNames from "classnames";
import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
} from "react";
import { Divider } from "../Divider";
import Link from "next/link";

export type DrawerCommonProps = {
  className?: string;
  isShowMinified?: boolean;
};

export type DrawerProps = {
  children?: ReactNode;
} & DrawerCommonProps;

export const Drawer = ({
  className,
  isShowMinified,
  children,
}: DrawerProps) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<DrawerCommonProps>, {
        isShowMinified,
      });
    }
    return child;
  });

  useEffect(() => {
    console.log("drawer", isShowMinified, childrenWithProps);
  }, [isShowMinified]);

  const { data: isDrawerMinified } = useGlobalDisclosure(
    "drawer-minified",
    false
  );
  const isMinified = isDrawerMinified && isShowMinified;

  return (
    <div
      className={classNames(
        "flex h-max flex-col items-stretch justify-start bg-white duration-100 dark:bg-gray-700",
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
          <div className="w-full px-10 text-12">
            <div className="flex items-center justify-start gap-10 text-gray-700 dark:text-white">
              <Link href="#">이용약관</Link>
              <Link href="#">개인정보처리방침</Link>
            </div>
            <div className="mt-8 text-gray-500 dark:text-gray-400">
              © 2023. 노래책 MUSICBOOK. All Rights Reserved.
            </div>
          </div>
        </>
      )}
    </div>
  );
};
