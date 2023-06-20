import useSWR from "swr";
import {
  GETMelonSongSearchResponse,
  GETMelonSongSearchSection,
  GETMelonSongSearchSort,
  GETMelonSongSearch,
} from "@/apis";

type FetcherArgs = readonly [
  [string, string],
  string,
  number,
  GETMelonSongSearchSort,
  GETMelonSongSearchSection
];

const fetcher = async ([
  [method, url],
  q,
  page,
  sort,
  section,
]: FetcherArgs) => {
  return await GETMelonSongSearch(q, { page, sort, section });
};

export const useGetMelonSongSearch = (
  q: string,
  options?: {
    page?: number;
    sort?: GETMelonSongSearchSort;
    section?: GETMelonSongSearchSection;
  }
) => {
  const { page = 1, sort = "hit", section = "all" } = options || {};
  return useSWR<GETMelonSongSearchResponse, any, FetcherArgs>(
    [["GET", "/melon/song"], q, page, sort, section],
    fetcher
  );
};
