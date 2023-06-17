import { ReactNode, useEffect, useState } from "react";
import { CommonDrawer, Header, Logo, Spotlight } from "..";
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

  const { data: isOpenDrawer, setData: setIsOpenDrawer } = useGlobalDisclosure(
    "drawer",
    false
  );
  const { data: isOpenSearchSpotlight, setData: setIsOpenSearchSpotlight } =
    useGlobalDisclosure("search-spotlight", false);
  const { setData: setIsDrawerMinified } = useGlobalDisclosure(
    "drawer-minified",
    false
  );
  const isTablet = useBreakpointSmaller("tablet");

  const handleClickCloseDrawer = () => {
    setIsOpenDrawer(false);
    setIsOpenSearchSpotlight(false);
  };

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
      <ScreenGuard
        isShow={isOpenDrawer || isOpenSearchSpotlight}
        className={classNames(
          "fixed left-0",
          notice ? "top-[32px] !h-[calc(100vh-32px)]" : "top-0 !h-[100vh]"
        )}
        onClick={handleClickCloseDrawer}
      />
      <div
        className={classNames(
          "fixed h-[100vh] w-[300px] bg-white pt-[56px] duration-200 dark:bg-gray-700",
          notice ? "top-[32px] h-[calc(100vh-32px)]" : "top-0 h-[100vh]",
          isOpenDrawer ? "left-0" : "-left-[300px]"
        )}
      >
        <div className="w-full h-full overflow-auto overflow-x-hidden ">
          <CommonDrawer />
        </div>
        <div className="absolute left-0 top-0 flex h-[56px] w-[300px] items-center justify-start gap-8 pl-10">
          <IconButton
            variant="ghost"
            icon={<Close />}
            aria-label="메뉴닫기"
            onClick={handleClickCloseDrawer}
          />
          <Link href="/">
            <div className="tablet:hidden">
              <Logo height={30} />
            </div>
            <div className="hidden tablet:block">
              <Logo isShowLogo={false} height={30} />
            </div>
          </Link>
        </div>
      </div>
      <Spotlight
        isShow={isOpenSearchSpotlight}
        onClose={() => setIsOpenSearchSpotlight(false)}
      />
    </>
  );
};
