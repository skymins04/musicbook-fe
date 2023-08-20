import { Banner, PageTitle } from "@components";
import dynamic from "next/dynamic";
import { MyLikedMusicPageSEO } from "./components";

const MusicCardList = dynamic(
  import("@components/MusicCardList").then((mod) => mod.MusicCardList)
);

export const MyLikedMusicPage = () => {
  return (
    <>
      <MyLikedMusicPageSEO />
      <div className="box-border h-max w-full p-20 semi-tablet:w-full mobile:px-10">
        <Banner
          bannerId="mobile-1"
          variant="mobile-1"
          className="mx-auto mb-20 hidden semi-tablet:block"
        />
        <PageTitle>내 좋아요</PageTitle>
        <MusicCardList
          isLiked
          rightArea={
            <Banner
              bannerId="desktop-1"
              variant="desktop-1"
              className="semi-tablet:hidden"
            />
          }
        />
      </div>
    </>
  );
};
