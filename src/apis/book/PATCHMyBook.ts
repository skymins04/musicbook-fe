import { musicbookAxios } from "../client";

export type PATCHMyBookOptions = {
  customId?: string;
  title?: string;
  description?: string;
  requestCommandPrefix?: string;
  thumbnail?: File;
  background?: File;
};

export const PATCHMyBook = async (options: PATCHMyBookOptions) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(options)) {
    formData.append(key, value);
  }

  await musicbookAxios.patch("/book/me", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
