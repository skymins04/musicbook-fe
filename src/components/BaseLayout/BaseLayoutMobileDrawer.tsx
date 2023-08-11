import { Dimmer, MainDrawer } from "@components";
import { useBreakpointSmaller, useGlobalDisclosure } from "@hooks";
import classNames from "classnames";
import { useEffect } from "react";

export const BaseLayoutMobileDrawer = () => {
  const isTablet = useBreakpointSmaller("tablet");
  const { data: isOpenDrawer, setData: setIsOpenDrawer } = useGlobalDisclosure(
    "drawer",
    false
  );

  useEffect(() => {
    if (!isTablet && isOpenDrawer) {
      setIsOpenDrawer(false);
    }
  }, [isTablet]);

  return (
    <>
      <Dimmer
        className="absolute"
        isOpen={isOpenDrawer}
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
    </>
  );
};
