import { PageTitle } from "@components";
import { useSearchQueryContext } from "@providers";

export const MusicSearchKeywordTitle = () => {
  const q = useSearchQueryContext();
  return <PageTitle>"{q}"의 검색결과</PageTitle>;
}