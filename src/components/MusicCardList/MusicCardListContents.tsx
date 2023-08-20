import { GETMusicSearchOptions, Music } from "@apis";
import { MusicCard } from "@components";
import { useGetMusicSearch } from "@fetchers";
import { useBreakpointSmaller } from "@hooks";
import { flattenPaginationData } from "@utils/flattenPaginationData";
import { useEffect } from "react";
import { MusicCardListEmpty } from "./MusicCardListEmpty";

export type MusicCardListContentsLoadingHandlerProps = {
  onLoadingStart?: () => void;
  onLoadingEnd?: (isLastPage: boolean, isEmpty: boolean) => void;
};

export type MusicCardListContentsProps = {
  isShowBookThumbnail?: boolean;
  isShowBookTitle?: boolean;
} & MusicCardListContentsLoadingHandlerProps &
  GETMusicSearchOptions;

export const MusicCardListContents = ({
  isShowBookThumbnail = true,
  isShowBookTitle = true,
  onLoadingStart,
  onLoadingEnd,
  ...options
}: MusicCardListContentsProps) => {
  const isSemiTablet = useBreakpointSmaller("semi-tablet");
  const { q, page, perPage, sort, category, bookId, isLiked } = options;
  const { data, isLoading, isValidating } = useGetMusicSearch(options);
  const musics = flattenPaginationData<Music>(data);

  useEffect(() => {
    if (isLoading || isValidating) {
      onLoadingStart && onLoadingStart();
    } else {
      const isLastPage = !data || data[data.length - 1].data.length < 30;
      const isEmpty = !musics || musics.length === 0;
      onLoadingEnd && onLoadingEnd(isLastPage, isEmpty);
    }
  }, [
    isLoading,
    isValidating,
    q,
    page,
    perPage,
    sort,
    category,
    bookId,
    isLiked,
  ]);

  return musics && musics.length !== 0 ? (
    musics.map((music) => (
      <MusicCard
        key={music.id}
        type={isSemiTablet ? "list" : "grid"}
        isShowBookThumbnail={isShowBookThumbnail}
        isShowBookTitle={isShowBookTitle}
        music={music}
        className="!max-w-none"
      />
    ))
  ) : (
    <MusicCardListEmpty />
  );
};
