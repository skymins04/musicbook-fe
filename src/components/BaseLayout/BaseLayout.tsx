import classNames from "classnames";
import { Dimmer, Header, MainDrawer, TopNotice } from "..";
import { useGlobalDisclosure } from "@hooks";
import { useBoolean } from "@hooks";
import { ReactNode } from "react";

export type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [isOpenNotice, setIsOpenNotice] = useBoolean(false);
  const { data: isOpenDrawer, setData: setIsOpenDrawer } = useGlobalDisclosure(
    "drawer",
    false
  );
  const isShowDimmer = isOpenDrawer;

  return (
    <div
      className={classNames(
        "relative flex h-full w-full flex-col items-stretch justify-stretch bg-gray-100 duration-200 dark:bg-gray-800"
      )}
    >
      <TopNotice onOpen={setIsOpenNotice.on} onClose={setIsOpenNotice.off} />
      <Header className="max-h-[56px] min-h-[56px] shadow-sm" />
      <div
        className={classNames(
          "relative flex items-stretch justify-stretch",
          isOpenNotice ? "h-[calc(100vh-56px-28px)]" : "h-[calc(100vh-56px)]"
        )}
      >
        <div className="relative block h-full min-w-max overflow-y-auto overflow-x-hidden border-r-1 border-gray-200 bg-white duration-200 dark:border-gray-800 dark:bg-gray-700 mobile:hidden">
          <MainDrawer isAllowMinified isShow />
        </div>
        <div className="relative box-border h-full w-full overflow-y-auto overflow-x-hidden">
          {children}
        </div>
        <Dimmer
          className="absolute"
          isOpen={isShowDimmer}
          onClick={() => setIsOpenDrawer(false)}
        />
        <div
          className={classNames(
            "absolute left-0 top-0 z-10 block h-full min-w-max overflow-y-auto overflow-x-hidden bg-white duration-200 dark:bg-gray-700",
            isOpenDrawer ? "translate-x-0" : "translate-x-[-100%]"
          )}
        >
          <MainDrawer isShow />
        </div>
      </div>
    </div>
  );
};
