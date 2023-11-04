import { BaseLayout } from "@components";
import { SearchPage, SearchPageProps } from "@containers/SearchPage";
import { getServerSideSearchPageProps } from "@containers/SearchPage/getServerSideSearchPageProps";

export const getServerSideProps = getServerSideSearchPageProps;

const SearchPageRouter = ({user, q}: SearchPageProps) => {
  return <BaseLayout user={user}>
    <SearchPage q={q} />
  </BaseLayout>;
};

export default SearchPageRouter;
