import { GETMusicLikeCountById } from "@/apis";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

const fetcher = ([[method, url], musicId]: FetcherKey) =>
  GETMusicLikeCountById(musicId);

export const useGetMusicLikeCountById = (musicId: string) =>
  useSWR([["GET", '/music/${musicId}/like'], musicId], fetcher);
