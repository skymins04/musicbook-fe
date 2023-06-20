import { appendFlattenObjectToFormData } from "@/utils/appendFlattenObjectToFormData";
import { musicbookAxios } from "../client";
import { MusicFormData } from "./music";

export const POSTMusic = async (
  type: "Melon" | "Original",
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
