import useSWR from "swr";
import { ApiClient, PagenationResponse } from "../client";

export type MelonSongSearchSort = "weight" | "hit" | "date" | "ganada";
export type MelonSongSearchSection = "all" | "song" | "artist" | "album";

type FetcherArgs = readonly [
  [string, string],
  string,
  number,
  MelonSongSearchSort,
  MelonSongSearchSection
];

export type GetMelonSongSearchResponse = PagenationResponse<
  { sort: MelonSongSearchSort },
  {
    songId: number;
    songTitle: string;
    artist: string;
    album: {
      title: string;
      id: number;
    };
  }
>;

const fetcher = async ([
  [method, url],
  q,
  page,
  sort,
  section,
]: FetcherArgs) => {
  const result = await ApiClient.request({
    method,
    url,
    params: { q, page, sort, section },
  });
  return result.data;
};

export const useGetMelonSongSearch = (
  q: string,
  options?: {
    page?: number;
    sort?: MelonSongSearchSort;
    section?: MelonSongSearchSection;
  }
) => {
  const { page = 1, sort = "hit", section = "all" } = options || {};
  return useSWR<GetMelonSongSearchResponse>(
    [["GET", "/melon/song"], q, page, sort, section],
    fetcher
  );
};
