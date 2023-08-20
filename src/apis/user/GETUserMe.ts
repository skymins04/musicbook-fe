import { AxiosRequestConfig } from "axios";
import { musicbookAxios } from "../client";
import { User } from "./user";

export type GETUserMeResponse = User;

export const GETUserMe = async (
  options?: AxiosRequestConfig<any>
): Promise<GETUserMeResponse> => {
  const result = await musicbookAxios.get("/user/me", options);

  return result.data.data;
};
