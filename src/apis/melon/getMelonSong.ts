import { musicbookAxios } from "..";

export type GetMelonSongResponse = {
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

export const getMelonSong = async (
  id: number
): Promise<GetMelonSongResponse> => {
  const result = await musicbookAxios.request({
    method: "GET",
    url: `/melon/song/${id}`,
  });

  return result.data.data;
};
