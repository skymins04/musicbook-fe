import { musicbookAxios } from "../client";

export type PATCHUserMeOptions = {
  displayName?: string;
  description?: string;
  profileImg?: File;
};

export const PATCHUserMe = async (options?: PATCHUserMeOptions) => {
  const formData = new FormData();

  for (const [key, itm] of Object.entries(options || {})) {
    formData.append(key, itm);
  }

  await musicbookAxios.patch("/user/me", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
