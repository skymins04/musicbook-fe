import classNames from "classnames";
import { Header, MainDrawer } from "..";
import { useBoolean } from "@hooks";
import { ReactNode } from "react";
import { BaseLayoutMobileDrawer } from "./BaseLayoutMobileDrawer";
import dynamic from "next/dynamic";
import { User } from "@apis";
import { UserContextProvider } from "@providers";

const TopNotice = dynamic(
  import("../TopNotice/TopNotice").then((mod) => mod.TopNotice)
);

export type BaseLayoutProps = {
  user?: User;
  children: ReactNode;
};

export const BaseLayout = ({ user, children }: BaseLayoutProps) => {
  const [isOpenNotice, setIsOpenNotice] = useBoolean(false);

  return (
    <UserContextProvider user={user}>
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
          <BaseLayoutMobileDrawer />
        </div>
      </div>
    </UserContextProvider>
  );
};
