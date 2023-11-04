import { GETBookMyLikeById } from "@apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string], string];

const fetcher = async ([, bookId]: FetcherKey) => GETBookMyLikeById(bookId);

export const useMutateGetBookMyLikeById = (bookId: string) =>
  useSWRMutation<boolean, any, FetcherKey, any>([["GET", "/book/${bookId}/like/me"], bookId], fetcher);
