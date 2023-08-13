import { DetailsHTMLAttributes, ReactNode } from "react";
import { DrawerBaseProps } from "./Drawer";
import classNames from "classnames";
import { useBreakpointSmaller, useGlobalDisclosure } from "@/hooks";
import { Skeleton, SkeletonBaseProps } from "../Skeleton";
import Link from "next/link";

export type DrawerItemProps = {
  icon?: ReactNode;
  hoveredIcon?: ReactNode;
} & SkeletonBaseProps &
  DrawerBaseProps &
  DetailsHTMLAttributes<HTMLButtonElement>;

export type DrawerLinkItemProps = {
  href: string;
} & DrawerItemProps;

export const DrawerItem = ({
  className,
  children,
  icon,
  isShow = true,
  hoveredIcon,
  isAllowMinified,
  onClick,
  ...props
}: DrawerItemProps) => {
  const isTablet = useBreakpointSmaller("tablet");
  const { data: isMinifiedDrawer } = useGlobalDisclosure(
    "drawer-minified",
    false
  );

  const isMinified = isTablet
    ? isAllowMinified
    : isAllowMinified && isMinifiedDrawer;

  return (
    <button
      {...props}
      onClick={isShow ? onClick : undefined}
      className={classNames(
        "group box-border flex w-full items-center rounded-6 bg-white font-normal text-gray-700 duration-200 dark:bg-gray-700 dark:text-white",
        isShow
          ? "hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:active:bg-gray-900"
          : "cursor-default",
        isMinified
          ? "h-[74px] flex-col justify-center gap-[5px] px-12 !text-12"
          : "h-[40px] flex-row justify-start gap-16 px-8 !text-16",
        className
      )}
    >
      <Skeleton isShow={isShow} isKeepWidth>
        <div className="min-w-24 relative flex h-24 w-24 items-center justify-center text-24 group-hover:hidden">
          {icon}
        </div>
        <div className="min-w-24 relative hidden h-24 w-24 items-center justify-center text-24 group-hover:flex">
          {hoveredIcon || icon}
        </div>
      </Skeleton>
      <Skeleton
        width="100%"
        height="16px"
        isShow={isShow}
        className={classNames(
          isMinified ? "whitespace-nowrap !text-center" : "!text-left"
        )}
      >
        {children}
      </Skeleton>
    </button>
  );
};

export const DrawerLinkItem = ({ href, ...props }: DrawerLinkItemProps) => {
  return (
    <Link href={href} className="h-max w-full">
      <DrawerItem {...props} />
    </Link>
  );
};
