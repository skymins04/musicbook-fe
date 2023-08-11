import { GETMyMusicSearch } from "@apis";
import useSWR from "swr";

const fetcher = () => GETMyMusicSearch();

export const useGetMyMusicSearch = () =>
  useSWR([["GET", "/music/me"]], fetcher);
