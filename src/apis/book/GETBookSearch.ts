import { PagenationResponse, musicbookAxios } from "../client";
import { Book } from "./book";

export type GETBookSearchSort = "NEWEST" | "SUGGEST" | "POPULAR";

export type GETBookSearchResponse = PagenationResponse<
  { sort: GETBookSearchSort },
  Book
>;

export type GETBookSearchOption = {
  q?: string;
  page?: number;
  perPage?: number;
  sort?: GETBookSearchSort;
  isLiked?: boolean;
};

export const GETBookSearch = async (
  options?: GETBookSearchOption
): Promise<GETBookSearchResponse> => {
  const { q, page = 1, perPage = 30, sort = "NEWEST", isLiked } = options || {};
  const result = await musicbookAxios.get("/book", {
    params: {
      q,
      page,
      perPage,
      sort,
      isLiked,
    },
  });

  return result.data;
};
