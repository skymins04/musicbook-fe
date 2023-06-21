import { appendFlattenObjectToFormData } from "@/utils/appendFlattenObjectToFormData";
import { musicbookAxios } from "../client";
import { MusicFormData } from "./music";

export type POSTMusicType = "Melon" | "Original";

export const POSTMusic = async (
  type: POSTMusicType,
  sourceId: string,
  options?: MusicFormData
) => {
  const formData = new FormData();
  formData.append(`source${type}Id`, sourceId);
  appendFlattenObjectToFormData(formData, options || {});

  await musicbookAxios.post("/music", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
