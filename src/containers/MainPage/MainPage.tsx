import { Banner } from "@components";
import dynamic from "next/dynamic";

const MusicCardList = dynamic(
  import("@components/MusicCardList").then((mod) => mod.MusicCardList)
);

export const MainPage = () => {
  return (
    <div className="box-border h-max w-full p-20 semi-tablet:w-full mobile:px-10">
      <Banner
        bannerId="mobile-1"
        variant="mobile-1"
        className="mx-auto mb-20 hidden semi-tablet:block"
      />
      <MusicCardList
        rightArea={
          <Banner
            bannerId="desktop-1"
            variant="desktop-1"
            className="semi-tablet:hidden"
          />
        }
      />
    </div>
  );
};
