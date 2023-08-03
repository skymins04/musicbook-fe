import { GETNotice } from "@apis/notice";
import useSWR from "swr";

export const useGetNotice = () =>
  useSWR([["GET", "/assets/json/notice.json"]], GETNotice);
