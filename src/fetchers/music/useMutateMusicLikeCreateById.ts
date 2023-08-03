import { POSTMusicLikeById } from "@/apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { musicId: string };

const fetcher = async (
  _: FetcherKey,
  { arg: { musicId } }: { arg: FetcherArg }
) => POSTMusicLikeById(musicId);

export const useMutateMusicLikeCrateById = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["POST", "/music/${musicId}/like"]],
    fetcher
  );
