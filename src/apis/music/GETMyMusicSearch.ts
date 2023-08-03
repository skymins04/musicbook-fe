import { PagenationResponse, musicbookAxios } from "../client";
import { Music } from "./music";

export type GETMyMusicSearchSort = "NEWEST" | "SUGGEST" | "POPULAR";

export type GETMyMusicSearchResponse = PagenationResponse<
  { sort: GETMyMusicSearchSort },
  Music
>;

export const GETMyMusicSearch = async (options?: {
  q?: string;
  page?: number;
  perPage?: number;
  sort?: GETMyMusicSearchSort;
  category?: string;
  bookId?: string;
}): Promise<GETMyMusicSearchResponse> => {
  const {
    q,
    page = 1,
    perPage = 30,
    sort = "NEWEST",
    category,
    bookId,
  } = options || {};
  const result = await musicbookAxios.get("/music/me", {
    params: {
      q,
      page,
      perPage,
      sort,
      category,
      bookId,
    },
  });

  return result.data;
};
