import useSWR from "swr";
import { GetMelonSongResponse, getMelonSong } from "@/apis";

type FetcherArgs = readonly [[string, string], number];

const fetcher = async ([[method, url], id]: FetcherArgs) => getMelonSong(id);

export const useGetMelonSong = (id: number) => {
  return useSWR<GetMelonSongResponse, any, FetcherArgs>(
    [["GET", `/melon/song/${id}`], id],
    fetcher
  );
};
