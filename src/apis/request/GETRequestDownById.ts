import { musicbookAxios } from "../client";

export const GETRequestDownById = async (requestId: string) => {
  await musicbookAxios.get(`/request/${requestId}/down`);
};
