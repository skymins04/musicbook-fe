import { musicbookAxios } from "../client";

export const PATCHUserMe = async (options?: {
  displayName?: string;
  description?: string;
  profileImg?: File;
}) => {
  const formData = new FormData();

  for (const [key, itm] of Object.entries(options || {})) {
    formData.append(key, itm);
  }

  await musicbookAxios.request({
    method: "PATCH",
    url: "/user/me",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
