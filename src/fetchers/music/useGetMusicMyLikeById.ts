import { GETMusicMyLikeById } from "@/apis";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

const fetcher = ([[method, url], musicId]: FetcherKey) =>
  GETMusicMyLikeById(musicId);

export const useGetMusicById = (musicId: string) =>
  useSWR([["GET", `/music/${musicId}/like/me`], musicId], fetcher);
