import { PagenationResponse, musicbookAxios } from "..";

export type GETMelonSongSearchSort = "weight" | "hit" | "date" | "ganada";
export type GETMelonSongSearchSection = "all" | "song" | "artist" | "album";

export type GETMelonSongSearchResponse = PagenationResponse<
  { sort: GETMelonSongSearchSort },
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

export const GETMelonSongSearch = async (
  q: string,
  options?: {
    page?: number;
    sort?: GETMelonSongSearchSort;
    section?: GETMelonSongSearchSection;
  }
): Promise<GETMelonSongSearchResponse> => {
  const { page = 1, sort = "hit", section = "all" } = options || {};
  const result = await musicbookAxios.get("/melon/song", {
    params: { q, page, sort, section },
  });

  return result.data;
};
