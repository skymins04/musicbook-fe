import { musicbookAxios } from "..";

export type GETMelonSongResponse = {
  songId: number;
  songTitle: string;
  albumTitle: string;
  artistName: string;
  category: string;
  releasedAt: string;
  artistThumbnail: string;
  thumbnail: {
    "200": string;
    "500": string;
    "1000": string;
  };
  lyrics: string;
};

export const GETMelonSongById = async (
  id: number
): Promise<GETMelonSongResponse> => {
  const result = await musicbookAxios.get(`/melon/song/${id}`);

  return result.data.data;
};
