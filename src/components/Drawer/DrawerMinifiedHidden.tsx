import { ReactNode } from "react";
import { DrawerCommonProps } from "./Drawer";
import { useGlobalDisclosure } from "@/hooks";

export type DrawerMinifedHiddenProps = {
  children: ReactNode;
} & DrawerCommonProps;

export const DrawerMinifedHidden = ({
  children,
  isShowMinified,
}: DrawerMinifedHiddenProps) => {
  const { data: isDrawerMinified } = useGlobalDisclosure(
    "drawer-minified",
    false
  );

  const isHidden = isDrawerMinified && isShowMinified;

  return <>{!isHidden && children}</>;
};
