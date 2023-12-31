import classNames from "classnames";
import { Tab, TabData } from "./Tab";
import { useCallback, useState } from "react";

export type TabsProps = {
  className?: string;
  tabs: TabData[];
  onChange?: (tab: TabData) => void;
};

export const Tabs = ({ className, tabs, onChange }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(
    tabs.length === 0 ? null : tabs[0].id
  );

  const handleClickTab = useCallback(
    (tab: TabData) => () => {
      setSelectedTab(tab.id);
      onChange && onChange(tab);
    },
    [setSelectedTab, onChange]
  );

  return (
    <div
      className={classNames(
        "h-max w-full overflow-x-auto overflow-y-hidden scrollbar-hide",
        className
      )}
    >
      <div className="flex h-max w-max items-center justify-start gap-4">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            {...tab}
            isSelected={tab.id === selectedTab}
            onClick={tab.id !== selectedTab ? handleClickTab(tab) : undefined}
          />
        ))}
      </div>
    </div>
  );
};
