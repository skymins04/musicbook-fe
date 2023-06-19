import { musicbookAxios } from "../client";

export type GETUserMeResponse = {
  id: string;
  displayName: string;
  profileImgURL: string;
  email: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  twitch?: {
    twitchId: string;
    twitchLogin: string;
    twitchDisplayName: string;
    twitchDescription: string;
    twitchProfileImgURL: string;
    twitchOfflineImgURL: string;
    twitchEmail: string;
    twitchCreatedAt: string;
    twitchType: string;
    twitchBroadcasterType: string;
    twitchAccessToken: string;
    twitchRefreshToken: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
  google?: {
    googleId: string;
    googleDisplayName: string;
    googleProfileImgURL: string;
    googleEmail: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
};

export const GETUserMe = async (): Promise<GETUserMeResponse> => {
  const result = await musicbookAxios.request({
    method: "GET",
    url: "/user/me",
  });

  return result.data.data;
};
