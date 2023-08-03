import { PATCHMyBook, PATCHMyBookOptions } from "@/apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = PATCHMyBookOptions;

const fetcher = async (_: FetcherKey, { arg }: { arg: FetcherArg }) =>
  PATCHMyBook(arg);

export const useMutateMyBookUpdate = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["PATCH", "/book/me/config"]],
    fetcher
  );
