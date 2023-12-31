import { GETMusicById } from "@apis";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

const fetcher = ([, musicId]: FetcherKey) => GETMusicById(musicId);

export const useGetMusicById = (musicId: string) =>
  useSWR([["GET", "/music/${musicId}"], musicId], fetcher);
