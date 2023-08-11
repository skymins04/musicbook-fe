import useSWR from "swr";
import { GETMelonAlbumResponse, GETMelonAlbumById } from "@apis";

type FetcherArgs = readonly [[string, string], number];

const fetcher = async ([, id]: FetcherArgs) => GETMelonAlbumById(id);

export const useGetMelonAlbum = (id: number) => {
  return useSWR<GETMelonAlbumResponse, any, FetcherArgs>(
    [["GET", "/melon/album/${id}"], id],
    fetcher
  );
};
