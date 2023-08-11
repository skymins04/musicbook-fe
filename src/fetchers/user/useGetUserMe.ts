import { GETUserMe } from "@apis";
import useSWR from "swr";

const fetcher = async () => GETUserMe();

export const useGetUserMe = () =>
  useSWR([["GET", "/user/me"]], fetcher, {
    shouldRetryOnError: false,
    errorRetryCount: 0,
  });
