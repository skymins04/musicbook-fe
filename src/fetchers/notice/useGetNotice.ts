import { GETNotice } from "@apis/notice";
import { JSONS } from "@constants";
import useSWR from "swr";

export const useGetNotice = () =>
  useSWR([["GET", JSONS.COMMON.NOTICE]], GETNotice);
