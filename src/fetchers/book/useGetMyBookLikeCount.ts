import { GETMyBookLikeCount } from "@apis";
import useSWR from "swr";

const fetcher = async () => GETMyBookLikeCount();

export const useGetMyBookLikeCount = () =>
  useSWR([["GET", "/book/me/like"]], fetcher);
