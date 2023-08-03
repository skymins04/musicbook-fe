import { musicbookAxios } from "../client";
import { User } from "./user";

export type GETUserMeResponse = User;

export const GETUserMe = async (): Promise<GETUserMeResponse> => {
  const result = await musicbookAxios.get("/user/me");

  return result.data.data;
};
