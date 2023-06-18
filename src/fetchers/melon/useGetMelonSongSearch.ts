import useSWR from "swr";
import {
  GetMelonSongSearchResponse,
  MelonSongSearchSection,
  MelonSongSearchSort,
  getMelonSongSearch,
} from "@/apis";

type FetcherArgs = readonly [
  [string, string],
  string,
  number,
  MelonSongSearchSort,
  MelonSongSearchSection
];

const fetcher = async ([
  [method, url],
  q,
  page,
  sort,
  section,
]: FetcherArgs) => {
  return await getMelonSongSearch(q, { page, sort, section });
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
  return useSWR<GetMelonSongSearchResponse, any, FetcherArgs>(
    [["GET", "/melon/song"], q, page, sort, section],
    fetcher
  );
};
