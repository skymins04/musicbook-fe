import classNames from "classnames";
import { ScreenGuard } from "../ScreenGuard/ScreenGuard";
import { useGlobalDisclosure } from "@/hooks";
import { CommonDrawer } from "../Drawer";
import { IconButton } from "@chakra-ui/react";
import { Close } from "@mui/icons-material";
import Link from "next/link";
import { Logo } from "../Logo";

export type BaseLayoutSlideDrawerProps = {
  isShowNotice?: boolean;
};

export const BaseLayoutSlideDrawer = ({
  isShowNotice,
}: BaseLayoutSlideDrawerProps) => {
  const { data: isOpenDrawer, setData: setIsOpenDrawer } = useGlobalDisclosure(
    "drawer",
    false
  );

  const handleClickCloseDrawer = () => {
    setIsOpenDrawer(false);
  };

  return (
    <>
      <ScreenGuard
        isShow={isOpenDrawer}
        className={classNames(
          "fixed left-0",
          isShowNotice ? "top-[32px] !h-[calc(100vh-32px)]" : "top-0 !h-[100vh]"
        )}
        onClick={handleClickCloseDrawer}
      />
      <div
        className={classNames(
          "fixed h-[100vh] w-[300px] bg-white pt-[56px] duration-200 dark:bg-gray-700",
          isShowNotice ? "top-[32px] h-[calc(100vh-32px)]" : "top-0 h-[100vh]",
          isOpenDrawer ? "left-0" : "-left-[300px]"
        )}
      >
        <div className="h-full w-full overflow-auto overflow-x-hidden ">
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
    </>
  );
};
