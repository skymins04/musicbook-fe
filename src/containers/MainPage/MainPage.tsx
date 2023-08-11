import { Tabs, CardLayout, MusicCardListLoader } from "@components";
import { MAINPAGE_TABS } from "./constants";

export const MainPage = () => {
  return (
    <div className="box-border h-max w-full p-20">
      <Tabs className="mb-20" tabs={MAINPAGE_TABS} />
      <CardLayout>
        <MusicCardListLoader />
      </CardLayout>
    </div>
  );
};
