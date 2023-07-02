import { User } from "../user";

export type Book = {
  id: string;
  customId: string;
  title: string;
  description: string;
  requestCommandPrefix: string;
  thumbnailURL: string | null;
  backgroundImgURL: string | null;
  likeCount: number;
  requestLimitCount: number;
  isHide: boolean;
  isPaid: boolean;
  isAllowRequest: boolean;
  isAllowRequestLimit: boolean;
  isAllowDuplicateRequest: boolean;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
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
