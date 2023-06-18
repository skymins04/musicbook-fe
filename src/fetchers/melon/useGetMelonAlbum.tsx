import useSWR from "swr";
import { GetMelonAlbumResponse, getMelonAlbum } from "@/apis";

type FetcherArgs = readonly [[string, string], number];

const fetcher = async ([[method, url], id]: FetcherArgs) => getMelonAlbum(id);

export const useGetMelonAlbum = (id: number) => {
  return useSWR<GetMelonAlbumResponse, any, FetcherArgs>(
    [["GET", `/melon/album/${id}`], id],
    fetcher
  );
};
