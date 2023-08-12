import { Banner } from "@components";
import dynamic from "next/dynamic";

const MusicCardList = dynamic(
  import("@components/MusicCardList").then((mod) => mod.MusicCardList)
);

export const MainPage = () => {
  return (
    <div className="box-border flex h-max w-full items-start justify-between">
      <div className="box-border h-max w-[calc(100%-170px)] p-20 semi-tablet:w-full mobile:px-10">
        <Banner
          bannerId="mobile-banner-1"
          variant="mobile-1"
          className="mx-auto mb-20 hidden semi-tablet:block"
        />
        <MusicCardList />
      </div>
      <div className="h-max w-max pr-20 pt-[80px] semi-tablet:hidden">
        <Banner bannerId="desktop-banner-1" variant="desktop-1" />
      </div>
    </div>
  );
};
