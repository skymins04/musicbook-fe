import { MusicFormData, PATCHMusicById } from "@/apis";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { musicId: string; options: MusicFormData };

const fetcher = async (key: FetcherKey, {arg: {musicId, options}}: {arg: FetcherArg}) => PATCHMusicById(musicId, options);

export const useMutateMusicUpdateById = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [["PATCH", "/music/${musicId}"]],
    fetcher
  );
