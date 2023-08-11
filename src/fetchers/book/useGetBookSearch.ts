import {
  GETBookSearch,
  GETBookSearchOption,
  GETBookSearchResponse,
  GETBookSearchSort,
} from "@apis";
import { isEmptyTrimedString } from "@utils";
import useSWRInfinite from "swr/infinite";
import { SWRInfiniteKeyLoader } from "swr/infinite";

type FetcherKey = readonly [
  [string, string],
  string?,
  number?,
  number?,
  GETBookSearchSort?
];

const fetcher = async ([, q, page, perPage, sort]: FetcherKey) =>
  GETBookSearch({ q, page, perPage, sort });

export const useGetBookSearch = (
  options?: Omit<GETBookSearchOption, "page">
) => {
  const { q, perPage, sort } = options || {};

  const getKey: SWRInfiniteKeyLoader<
    GETBookSearchResponse,
    FetcherKey | null
  > = (pageIndex, prevPageData) => {
    if (prevPageData && prevPageData.data.length < (perPage ?? 30)) return null;
    const filteredQuery = q
      ? isEmptyTrimedString(q)
        ? undefined
        : q
      : undefined;
    return [["GET", "/book"], filteredQuery, pageIndex + 1, perPage, sort];
  };

  return useSWRInfinite(getKey, fetcher, { parallel: true });
};
