import { GETMusicConfigById } from "@/apis";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

const fetcher = ([[method, url], musicId]: FetcherKey) =>
  GETMusicConfigById(musicId);

export const useGetMusicConfigById = (musicId: string) =>
  useSWR([["GET", `/music/${musicId}/config`], musicId], fetcher);
