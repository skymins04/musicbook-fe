import { GETBookSearch, GETBookSearchSort } from "@/apis";
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

export const useGetBookSearch = () =>
  useSWR([["GET", "/book/${bookId}/like/me"]], fetcher);
