import { musicbookAxios } from "..";

export type GetMelonAlbumResponse = {
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

export const getMelonAlbum = async (
  id: number
): Promise<GetMelonAlbumResponse> => {
  const result = await musicbookAxios.request({
    method: "GET",
    url: `/melon/album/${id}`,
  });

  return result.data.data;
};
