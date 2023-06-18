import useSWR from "swr";
import { ApiClient } from "../client";

type FetcherArgs = readonly [string, string];

export type GetMelonSongResponse = {
  songId: number;
  songTitle: string;
  albumTitle: string;
  artistName: string;
  category: string;
  releasedAt: string;
  artistThumbnail: string;
  thumbnail: {
    "200": string;
    "500": string;
    "1000": string;
  };
  lyrics: string;
};

const fetcher = async ([method, url]: FetcherArgs) => {
  const result = await ApiClient.request({
    method,
    url,
  });
  return result.data.data;
};

export const useGetMelonSong = (id: number) => {
  return useSWR<GetMelonSongResponse>(["GET", `/melon/song/${id}`], fetcher);
};
