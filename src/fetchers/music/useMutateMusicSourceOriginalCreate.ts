import { POSTMusicSourceOriginal, POSTMusicSourceOriginalOptions } from "@apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];

const fetcher = async (
  _: FetcherKey,
  { arg }: { arg: POSTMusicSourceOriginalOptions }
) => POSTMusicSourceOriginal(arg);

export const useMutateMusicSourceOriginalCreate = () =>
  useSWRMutation<any, any, FetcherKey, POSTMusicSourceOriginalOptions>(
    [["POST", "/music/source/original"]],
    fetcher
  );
