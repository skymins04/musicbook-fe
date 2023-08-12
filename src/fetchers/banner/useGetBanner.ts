import { BannerJSON, GETBanner } from "@apis";
import { JSONS } from "@constants";
import useSWR from "swr";

type FetcherKey = [[string, string]];

const fetcher = async () => {
  return GETBanner();
};

export const useGetBanner = () => {
  return useSWR<BannerJSON | undefined, any, FetcherKey>(
    [["GET", JSONS.COMMON.BANNER]],
    fetcher
  );
};
