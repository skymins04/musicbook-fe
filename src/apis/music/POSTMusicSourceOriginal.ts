import { musicbookAxios } from "../client";

export const POSTMusicSourceOriginal = async (options: {
  title: string;
  artistName: string;
  artistThumbnail?: File;
  category: string;
  albumTitle?: string;
  albumThumbnail?: string;
  lyrics?: string;
}) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(options)) {
    formData.append(key, value);
  }

  await musicbookAxios.post("/music/source/original", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
