import { Banner, Divider, PageSubtitle } from "@components";
import { MusicSearchKeywordTitle, MusicSearchList, SearchPageSEO } from "./components";
import { User } from "@apis";
import { SearchQueryContextProvider } from "@providers";

export type SearchQueryBaseProps = {
  q: string;
}

export type SearchPageProps = {
  user?: User;
} & SearchQueryBaseProps;


export const SearchPage = ({q}: SearchPageProps) => {
  return (
    <>
      <SearchPageSEO q={q} />
      <SearchQueryContextProvider q={q}>
      <div className="box-border h-max w-full p-20 semi-tablet:w-full mobile:px-10">
        <Banner
          bannerId="mobile-1"
          variant="mobile-1"
          className="mx-auto mb-20 hidden semi-tablet:block"
        />
        <MusicSearchKeywordTitle />
        <PageSubtitle>노래책</PageSubtitle>
        <Divider />
        <PageSubtitle className="mt-10">수록곡</PageSubtitle>
        <MusicSearchList />
      </div>
      </SearchQueryContextProvider>
    </>
  );
};
