import { DELETEMusicLikeById } from "@/apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { musicId: string };

const fetcher = async (
  _: FetcherKey,
  { arg: { musicId } }: { arg: FetcherArg }
) => DELETEMusicLikeById(musicId);

export const useMutateMusicLikeDeleteById = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["DELETE", "/music/${musicId}/like"]],
    fetcher
  );
