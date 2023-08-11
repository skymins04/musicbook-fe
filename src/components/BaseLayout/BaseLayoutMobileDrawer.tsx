import { Dimmer, MainDrawer } from "@components";
import { useGlobalDisclosure } from "@hooks";
import classNames from "classnames";

export const BaseLayoutMobileDrawer = () => {
  const { data: isOpenDrawer, setData: setIsOpenDrawer } = useGlobalDisclosure(
    "drawer",
    false
  );

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
