import { Tabs, AutoGrid, MusicCardListLoader } from "@components";
import { MAINPAGE_TABS } from "./constants";
import { useBreakpointSmaller } from "@hooks";

export const MainPage = () => {
  const isTablet = useBreakpointSmaller("tablet");

  return (
    <div className="box-border h-max w-full p-20">
      <Tabs className="mb-20" tabs={MAINPAGE_TABS} />
      <AutoGrid>
        <MusicCardListLoader type={isTablet ? "list" : "grid"} />
      </AutoGrid>
    </div>
  );
};
