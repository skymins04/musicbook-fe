import { GETBookLikeCountById } from "@/apis";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

const fetcher = async ([, bookId]: FetcherKey) => GETBookLikeCountById(bookId);

export const useGetBookLikeCountById = (bookId: string) =>
  useSWR([["GET", "/book/${bookId}/like"], bookId], fetcher);
