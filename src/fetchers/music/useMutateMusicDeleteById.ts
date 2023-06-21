import { DELETEMusicById } from "@/apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { musicId: string };

const fetcher = async (
  key: FetcherKey,
  { arg: { musicId } }: { arg: FetcherArg }
) => DELETEMusicById(musicId);

export const useMutateMusicDeleteById = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["DELETE", "/music/${musicId}"]],
    fetcher
  );
