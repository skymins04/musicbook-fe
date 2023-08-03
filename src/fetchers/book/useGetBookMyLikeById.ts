import { GETBookMyLikeById } from "@/apis";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

const fetcher = async ([, bookId]: FetcherKey) => GETBookMyLikeById(bookId);

export const useGetBookMyLikeById = (bookId: string) =>
  useSWR([["GET", "/book/${bookId}/like/me"], bookId], fetcher);
