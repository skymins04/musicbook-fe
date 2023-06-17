import { ReactNode, useEffect, useState } from "react";
import {
  BaseLayoutSlideDrawer,
  CommonDrawer,
  Header,
  Logo,
  Spotlight,
} from "..";
import { TopNotice } from "../TopNotice/TopNotice";
import classNames from "classnames";
import { useBreakpointSmaller, useGlobalDisclosure } from "@/hooks";
import { ScreenGuard } from "../ScreenGuard/ScreenGuard";
import { IconButton } from "@chakra-ui/react";
import { Close } from "@mui/icons-material";
import Link from "next/link";

export type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [notice, setNotice] = useState("");

  const { setData: setIsOpenDrawer } = useGlobalDisclosure("drawer", false);
  const { setData: setIsDrawerMinified } = useGlobalDisclosure(
    "drawer-minified",
    false
  );
  const isTablet = useBreakpointSmaller("tablet");

  useEffect(() => {
    setIsOpenDrawer(false);
    setIsDrawerMinified(isTablet);
  }, [isTablet]);

  return (
    <>
      <div className="relative h-[100vh] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <TopNotice onClickClose={() => setNotice("")}>{notice}</TopNotice>
        <Header />
        <div
          className={classNames(
            "flex w-full items-stretch justify-between",
            notice ? "h-[calc(100vh-56px-32px)]" : "h-[calc(100vh-56px)]"
          )}
        >
          {children}
        </div>
      </div>
      <BaseLayoutSlideDrawer />
      <Spotlight />
    </>
  );
};
