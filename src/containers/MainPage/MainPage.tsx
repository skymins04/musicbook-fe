import dynamic from "next/dynamic";

const MusicCardList = dynamic(
  import("@components/MusicCardList").then((mod) => mod.MusicCardList)
);

export const MainPage = () => {
  return (
    <div className="box-border h-max w-full p-20">
      <MusicCardList />
    </div>
  );
};
