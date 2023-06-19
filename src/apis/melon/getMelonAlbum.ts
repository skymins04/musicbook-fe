import { musicbookAxios } from "..";

export type GETMelonAlbumResponse = {
  albumId: number;
  albumTitle: string;
  artistName: string;
  artistThumbnail: string;
  thumbnail: {
    "200": string;
    "500": string;
    "1000": string;
  };
};

export const GETMelonAlbum = async (
  id: number
): Promise<GETMelonAlbumResponse> => {
  const result = await musicbookAxios.request({
    method: "GET",
    url: `/melon/album/${id}`,
  });

  return result.data.data;
};
