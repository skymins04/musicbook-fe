import { PagenationResponse, musicbookAxios } from "..";

export type MelonSongSearchSort = "weight" | "hit" | "date" | "ganada";
export type MelonSongSearchSection = "all" | "song" | "artist" | "album";

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

export const getMelonSongSearch = async (
  q: string,
  options?: {
    page?: number;
    sort?: MelonSongSearchSort;
    section?: MelonSongSearchSection;
  }
): Promise<GetMelonSongSearchResponse> => {
  const { page = 1, sort = "hit", section = "all" } = options || {};
  const result = await musicbookAxios.request({
    method: "GET",
    url: "/melon/song",
    params: { q, page, sort, section },
  });

  return result.data;
};