import { musicbookAxios } from "../client";

export const DELETERequestById = async (requestId: string) => {
  await musicbookAxios.delete(`/request/${requestId}`);
};
