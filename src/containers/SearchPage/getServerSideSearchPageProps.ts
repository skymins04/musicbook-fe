import { GetServerSideProps } from "next";
import { SearchPageProps } from "./SearchPage";
import { isEmptyTrimedString } from "@utils";

const BadSearchRequest = new Error("bad search request");

export const getServerSideSearchPageProps: GetServerSideProps<
  SearchPageProps
> = async (ctx) => {
  try {
    const {q} = ctx.query;
    if(!q || typeof q !== 'string' || isEmptyTrimedString(q)) throw BadSearchRequest;

    return {
      props: {
        q,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
