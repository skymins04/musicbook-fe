import { User } from "../user";

export type Book = {
  id: string;
  customId: string;
  title: string;
  description: string;
  requestCommandPrefix: string;
  thumbnailURL: string;
  backgroundImgURL: string;
  likeCount: 100;
  requestLimitCount: 10;
  isHide: false;
  isPaid: false;
  isAllowRequest: true;
  isAllowRequestLimit: true;
  isAllowDuplicateRequest: false;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  broadcaster?: User;
};

export type BookConfig = {
  isHide: boolean;
  isPaid: boolean;
  isAllowDuplicateRequest: boolean;
  isAllowRequest: boolean;
  isAllowRequestLimit: boolean;
  requestLimitCount: boolean;
};
