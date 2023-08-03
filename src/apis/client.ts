import { API_HOST } from "@/constants/host";
import axios from "axios";

export const musicbookAxios = axios.create({
  withCredentials: true,
  timeout: 10000,
  baseURL: API_HOST,
});

export type PagenationResponse<T, V> = {
  meta: {
    perPage: number;
    currentPage: number;
    pageItemCount: number;
  } & T;
  data: V[];
};
