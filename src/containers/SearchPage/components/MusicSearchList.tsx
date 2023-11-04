import dynamic from "next/dynamic";
import { useSearchQueryContext } from "@providers";

const MusicCardList = dynamic(
  import("@components/MusicCardList").then((mod) => mod.MusicCardList)
);

export const MusicSearchList = () => {
  const q = useSearchQueryContext();
  return <MusicCardList q={q} />;
};