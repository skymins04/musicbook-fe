import { POSTBookLikeById } from "@apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = {
  bookId: string;
};

const fetcher = async (
  _: FetcherKey,
  { arg: { bookId } }: { arg: FetcherArg }
) => POSTBookLikeById(bookId);

export const useMutateBookLikeCreateById = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["POST", "/book/${bookId}/like"]],
    fetcher
  );
