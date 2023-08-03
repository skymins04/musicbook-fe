import useSWRMutation from "swr/mutation";
import { MusicFormData, POSTMusic, POSTMusicType } from "@/apis";

type FetcherKey = readonly [[string, string]];
type FetcherArg = {
  type: POSTMusicType;
  sourceId: string;
  options?: MusicFormData;
};

const fetcher = async (
  _: FetcherKey,
  { arg: { type, sourceId, options } }: { arg: FetcherArg }
) => POSTMusic(type, sourceId, options);

export const useMutateMusicCreate = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["POST", "/music"]],
    fetcher
  );
