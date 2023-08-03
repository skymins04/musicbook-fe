import { POSTMusicSourceMelon } from "@/apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { melonSongId: string };

const fetcher = async (
  _: FetcherKey,
  { arg: { melonSongId } }: { arg: FetcherArg }
) => POSTMusicSourceMelon(melonSongId);

export const useMutateMusicSourceMelonCreate = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["POST", "/music/source/melon"]],
    fetcher
  );
