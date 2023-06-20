import { musicbookAxios } from "../client";

export const GETRequestUpById = async (requestId: string) => {
  await musicbookAxios.get(`/request/${requestId}/up`);
};
