import { appendFlattenObjectToFormData } from "@/utils/appendFlattenObjectToFormData";
import { MusicFormData } from "./music";
import { musicbookAxios } from "../client";

export const PATCHMusicById = async (
  musicId: string,
  options: MusicFormData
) => {
  const formData = new FormData();
  appendFlattenObjectToFormData(formData, options);

  await musicbookAxios.patch(`/music/${musicId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
