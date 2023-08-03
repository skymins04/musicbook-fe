import { GETMusicMyLikeById } from "@/apis";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

const fetcher = ([, musicId]: FetcherKey) => GETMusicMyLikeById(musicId);

export const useGetMusicMyLikeById = (musicId: string) =>
  useSWR([["GET", "/music/${musicId}/like/me"], musicId], fetcher);
