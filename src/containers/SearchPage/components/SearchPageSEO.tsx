import { BaseSEO } from "@components";
import { SearchQueryBaseProps } from "../SearchPage";

export type SearchPageSEO = SearchQueryBaseProps;

export const SearchPageSEO = ({q}: SearchPageSEO) => {
  const title = `${q} 검색결과 | 노래책 - 즐거운 음악 방송을 위한 신청곡 플랫폼`;
  return <BaseSEO title={title} />;
};
