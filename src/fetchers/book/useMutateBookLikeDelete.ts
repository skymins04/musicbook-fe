import { DELETEBookLikeById } from "@/apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = {
  bookId: string;
};

const fetcher = async (
  _: FetcherKey,
  { arg: { bookId } }: { arg: FetcherArg }
) => DELETEBookLikeById(bookId);

export const useMutateBookLikeDelete = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["DELETE", "/book/${bookId}/like"]],
    fetcher
  );
