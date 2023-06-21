import { GETMusicMeSearch } from "@/apis";
import useSWR from "swr";

const fetcher = () => GETMusicMeSearch();

export const useGetMusicById = () => useSWR([["GET", "/music/me"]], fetcher);
