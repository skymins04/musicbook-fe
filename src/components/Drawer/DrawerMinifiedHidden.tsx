import { Children, ReactNode, cloneElement, isValidElement } from "react";
import { DrawerBaseProps } from ".";
import { useBreakpointSmaller, useGlobalDisclosure } from "@/hooks";
import { SkeletonBaseProps } from "..";

export type DrawerMinifiedHiddenProps = {
  children: ReactNode;
} & SkeletonBaseProps &
  DrawerBaseProps;

export const DrawerMinifiedHidden = ({
  children,
  isAllowMinified,
  isShow,
}: DrawerMinifiedHiddenProps) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement<any>(child, { isAllowMinified, isShow });
    }
    return child;
  });

  const isTablet = useBreakpointSmaller("tablet");
  const { data: isMinifiedDrawer } = useGlobalDisclosure(
    "drawer-minified",
    false
  );

  const isMinified = isTablet
    ? isAllowMinified
    : isAllowMinified && isMinifiedDrawer;

  return isMinified ? undefined : childrenWithProps;
};
