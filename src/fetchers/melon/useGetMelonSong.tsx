import useSWR from "swr";
import { GETMelonSongResponse, GETMelonSong } from "@/apis";

type FetcherArgs = readonly [[string, string], number];

const fetcher = async ([[method, url], id]: FetcherArgs) => GETMelonSong(id);

export const useGetMelonSong = (id: number) => {
  return useSWR<GETMelonSongResponse, any, FetcherArgs>(
    [["GET", `/melon/song/${id}`], id],
    fetcher
  );
};
