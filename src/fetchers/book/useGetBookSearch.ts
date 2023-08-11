import { GETBookSearch, GETBookSearchOption, GETBookSearchSort } from "@apis";
import useSWR from "swr";

type FetcherKey = readonly [
  [string, string],
  string,
  number,
  number,
  GETBookSearchSort
];

const fetcher = async ([, q, page, perPage, sort]: FetcherKey) =>
  GETBookSearch({ q, page, perPage, sort });

export const useGetBookSearch = (options?: GETBookSearchOption) => {
  const { q, page, perPage, sort } = options || {};
  return useSWR([["GET", "/book"], q, page, perPage, sort], fetcher);
};
