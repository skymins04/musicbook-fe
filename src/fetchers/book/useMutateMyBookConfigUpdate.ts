import { BookConfig, PATCHMyBookConfig } from "@apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = Partial<BookConfig>;

const fetcher = async (_: FetcherKey, { arg }: { arg: FetcherArg }) =>
  PATCHMyBookConfig(arg);

export const useMutateMyBookConfigUpdate = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["PATCH", "/book/me/config"]],
    fetcher
  );
