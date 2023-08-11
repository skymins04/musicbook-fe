import { GETMusicSearchOptions, Music } from "@apis";
import { MusicCard } from "@components";
import { useGetMusicSearch } from "@fetchers";
import { useBreakpointSmaller } from "@hooks";
import { flattenPaginationData } from "@utils/flattenPaginationData";
import { useEffect } from "react";

export type MusicCardListContentsLoadingHandlerProps = {
  onLoadingStart?: () => void;
  onLoadingEnd?: (isLastPage: boolean) => void;
};

export type MusicCardListContentsProps = {
  isShowBookThumbnail?: boolean;
} & MusicCardListContentsLoadingHandlerProps &
  GETMusicSearchOptions;

export const MusicCardListContents = ({
  isShowBookThumbnail = true,
  onLoadingStart,
  onLoadingEnd,
  ...options
}: MusicCardListContentsProps) => {
  const isSemiTablet = useBreakpointSmaller("semi-tablet");

  const { data, isLoading } = useGetMusicSearch(options);
  const musics = flattenPaginationData<Music>(data);

  useEffect(() => {
    if (isLoading) {
      onLoadingStart && onLoadingStart();
    } else {
      const isLastPage = !data || data[data.length - 1].data.length < 30;
      onLoadingEnd && onLoadingEnd(isLastPage);
    }
  }, [isLoading]);

  return musics?.map((music) => (
    <MusicCard
      key={music.id}
      type={isSemiTablet ? "list" : "grid"}
      isShowBookThumbnail={isShowBookThumbnail}
      music={music}
      className="!max-w-none"
    />
  ));
};
