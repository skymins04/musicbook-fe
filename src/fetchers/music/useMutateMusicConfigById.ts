import { MusicConfig, PATCHMusicConfigById } from "@apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = [[string, string]];
type FetcherArg = { musicId: string; options: Partial<MusicConfig> };

const fetcher = async (
  _: FetcherKey,
  { arg: { musicId, options } }: { arg: FetcherArg }
) => {
  await PATCHMusicConfigById(musicId, options);
};

export const useMutateMusicConfigById = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["PATCH", "/music/${musicId}/config"]],
    fetcher
  );
