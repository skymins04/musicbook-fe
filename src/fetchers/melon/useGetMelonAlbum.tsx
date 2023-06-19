import useSWR from "swr";
import { GETMelonAlbumResponse, GETMelonAlbum } from "@/apis";

type FetcherArgs = readonly [[string, string], number];

const fetcher = async ([[method, url], id]: FetcherArgs) => GETMelonAlbum(id);

export const useGetMelonAlbum = (id: number) => {
  return useSWR<GETMelonAlbumResponse, any, FetcherArgs>(
    [["GET", `/melon/album/${id}`], id],
    fetcher
  );
};
