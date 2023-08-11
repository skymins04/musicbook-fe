import { GETMusicSearchOptions, Music } from "@apis";
import { useGetMusicSearch } from "@fetchers";
import { useEffect, useState } from "react";
import { MusicCard } from "./MusicCard";
import { useBreakpointSmaller } from "@hooks";

export type MusicCardLoaderProps = {
  isShowBookThumbnail?: boolean;
} & GETMusicSearchOptions;

export const MusicCardListLoader = ({
  isShowBookThumbnail,
  ...options
}: MusicCardLoaderProps) => {
  const isSemiTablet = useBreakpointSmaller("semi-tablet");
  const [musics, setMusics] = useState<Music[]>([]);
  const { data, isLoading, error } = useGetMusicSearch(options);

  useEffect(() => {
    if (!isLoading && !error && data) {
      setMusics((state) => [...state, ...data.data]);
    }
  }, [data, isLoading, error]);

  return musics.map((music) => (
    <MusicCard
      key={music.id}
      type={isSemiTablet ? "list" : "grid"}
      isShowBookThumbnail={isShowBookThumbnail}
      music={music}
      className="!max-w-none"
    />
  ));
};
