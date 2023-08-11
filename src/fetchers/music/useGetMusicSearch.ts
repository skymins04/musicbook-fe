import {
  GETMusicSearch,
  GETMusicSearchOptions,
  GETMusicSearchSort,
} from "@apis";
import useSWR from "swr";

type FetcherKey = readonly [
  [string, string],
  string?,
  number?,
  number?,
  GETMusicSearchSort?,
  string?,
  string?
];

const fetcher = ([, q, page, perPage, sort, category, bookId]: FetcherKey) =>
  GETMusicSearch({ q, page, perPage, sort, category, bookId });

export const useGetMusicSearch = (options?: GETMusicSearchOptions) => {
  const { q, page, perPage, sort, category, bookId } = options || {};
  return useSWR(
    [["GET", "/music"], q, page, perPage, sort, category, bookId],
    fetcher
  );
};
