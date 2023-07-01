import { ReactNode } from "react";
import { DrawerBaseProps } from ".";
import { useGlobalDisclosure } from "@/hooks";

export type DrawerMinifiedHiddenProps = {
  children: ReactNode;
} & DrawerBaseProps;

export const DrawerMinifiedHidden = ({
  children,
  isAllowMinified,
}: DrawerMinifiedHiddenProps) => {
  const { data: isMinifiedDrawer } = useGlobalDisclosure(
    "drawer-minified",
    false
  );

  const isMinified = isAllowMinified && isMinifiedDrawer;

  return isMinified ? undefined : children;
};
