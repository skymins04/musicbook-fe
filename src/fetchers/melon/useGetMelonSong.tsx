import useSWR from "swr";
import { GETMelonSongResponse, GETMelonSongById } from "@/apis";

type FetcherArgs = readonly [[string, string], number];

const fetcher = async ([[method, url], id]: FetcherArgs) =>
  GETMelonSongById(id);

export const useGetMelonSong = (id: number) => {
  return useSWR<GETMelonSongResponse, any, FetcherArgs>(
    [["GET", `/melon/song/${id}`], id],
    fetcher
  );
};
