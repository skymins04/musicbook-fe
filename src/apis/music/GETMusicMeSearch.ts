import { PagenationResponse, musicbookAxios } from "../client";
import { Music } from "./music";

export type GETMusicMeSearchSort = "NEWEST" | "SUGGEST" | "POPULAR";

export type GETMusicMeSearchResponse = PagenationResponse<
  { sort: GETMusicMeSearchSort },
  Music
>;

export const GETMusicMeSearch = async (options?: {
  q?: string;
  page?: number;
  perPage?: number;
  sort?: GETMusicMeSearchSort;
  category?: string;
  bookId?: string;
}): Promise<GETMusicMeSearchResponse> => {
  const {
    q,
    page = 1,
    perPage = 30,
    sort = "NEWEST",
    category,
    bookId,
  } = options || {};
  const result = await musicbookAxios.get("/music", {
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
