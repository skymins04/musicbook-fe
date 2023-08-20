import {
  GETMusicSearch,
  GETMusicSearchOptions,
  GETMusicSearchResponse,
  GETMusicSearchSort,
} from "@apis";
import { isEmptyTrimedString } from "@utils";
import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

type FetcherKey = readonly [
  [string, string],
  string?,
  number?,
  number?,
  GETMusicSearchSort?,
  string?,
  string?,
  boolean?
];

const fetcher = ([
  ,
  q,
  page,
  perPage,
  sort,
  category,
  bookId,
  isLiked,
]: FetcherKey) => {
  return GETMusicSearch({ q, page, perPage, sort, category, bookId, isLiked });
};

export const useGetMusicSearch = (
  options?: Omit<GETMusicSearchOptions, "page">
) => {
  const { q, perPage, sort, category, bookId, isLiked } = options || {};

  const getKey: SWRInfiniteKeyLoader<
    GETMusicSearchResponse,
    FetcherKey | null
  > = (pageIndex, prevPageData) => {
    if (prevPageData && prevPageData.data.length < (perPage ?? 30)) return null;
    const filteredQuery = q
      ? isEmptyTrimedString(q)
        ? undefined
        : q
      : undefined;
    return [
      ["GET", "/music"],
      filteredQuery,
      pageIndex + 1,
      perPage,
      sort,
      category,
      bookId,
      isLiked,
    ];
  };

  return useSWRInfinite(getKey, fetcher, { parallel: true });
};
