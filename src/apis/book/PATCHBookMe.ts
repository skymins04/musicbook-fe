import { musicbookAxios } from "../client";

export const PATCHBookMe = async (options: {
  customId?: string;
  title?: string;
  description?: string;
  requestCommandPrefix?: string;
  thumbnail?: File;
  background?: File;
}) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(options)) {
    formData.append(key, value);
  }

  await musicbookAxios.patch("/book/me", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
