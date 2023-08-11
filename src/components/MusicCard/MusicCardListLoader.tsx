import { GETMusicSearchOptions, Music } from "@apis";
import { useGetMusicSearch } from "@fetchers";
import { useEffect, useState } from "react";
import { MusicCard, MusicCardType } from "./MusicCard";

export type MusicCardLoaderProps = {
  type?: MusicCardType;
  isShowBookThumbnail?: boolean;
} & GETMusicSearchOptions;

export const MusicCardListLoader = ({
  type,
  isShowBookThumbnail,
  ...options
}: MusicCardLoaderProps) => {
  const [musics, setMusics] = useState<Music[]>([]);
  const { data, isLoading, error } = useGetMusicSearch(options);

  useEffect(() => {
    if (!isLoading && !error && data) {
      setMusics((state) => [...state, ...data.data]);
    }
  }, [data, isLoading, error]);

  return musics.map((music) => (
    <MusicCard
      type={type}
      isShowBookThumbnail={isShowBookThumbnail}
      music={music}
      className="!max-w-none"
    />
  ));
};
