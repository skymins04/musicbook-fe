import { PagenationResponse, musicbookAxios } from "../client";
import { Music } from "./music";

export type GETMusicSearchSort = "NEWEST" | "SUGGEST" | "POPULAR";

export type GETMusicSearchResponse = PagenationResponse<
  { sort: GETMusicSearchSort },
  Music
>;

export type GETMusicSearchOptions = {
  q?: string;
  page?: number;
  perPage?: number;
  sort?: GETMusicSearchSort;
  category?: string;
  bookId?: string;
  isLiked?: boolean;
};

export const GETMusicSearch = async (
  options?: GETMusicSearchOptions
): Promise<GETMusicSearchResponse> => {
  const {
    q,
    page = 1,
    perPage = 30,
    sort = "NEWEST",
    category,
    bookId,
    isLiked,
  } = options || {};
  const result = await musicbookAxios.get("/music", {
    params: {
      q,
      page,
      perPage,
      sort,
      category,
      bookId,
      isLiked,
    },
  });

  return result.data;
};
