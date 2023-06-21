import { GETMyBook } from "@/apis";
import useSWR from "swr";

const fetcher = async () => GETMyBook();

export const useGetMyBook = () => useSWR([["GET", "/book/me"]], fetcher);
