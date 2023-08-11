import { GETMyBookConfig } from "@apis";
import useSWR from "swr";

const fetcher = async () => GETMyBookConfig();

export const useGetMyBookConfig = () =>
  useSWR([["GET", "/book/me/config"]], fetcher);
