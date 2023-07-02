import { Book } from "../book";
import { User } from "../user";

export type PreviewURLType = "YOUTUBE" | "SOUNDCLOUD" | "SPOTIFY";

export type PreviewFileType = "FLAC" | "WAV" | "MP3";

export type PreviewType = PreviewURLType | PreviewFileType;

export type PreviewOption =
  | {
      previewType: PreviewURLType;
      previewURL: string;
    }
  | {
      previewType: PreviewFileType;
      previewFile: File;
    };

export type MrURLType = "YOUTUBE" | "SOUNDCLOUD" | "SPOTIFY";

export type MrFileType = "FLAC" | "WAV" | "MP3";

export type MrType = MrURLType | MrFileType;

export type MrOption =
  | {
      mrType: MrURLType;
      mrURL: string;
    }
  | {
      mrType: MrFileType;
      mrFile: File;
    };

export type MusicFormData = {
  title?: string;
  description?: string;
  preview?: PreviewOption;
  mr?: MrOption;
};

export type MusicSourceOriginal = {
  songId: string;
  songTitle: string;
  artistName: string;
  artistThumbnail: string;
  category: string;
  albumTitle: string;
  albumThumbnail: string;
  lyrics: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type MusicSourceMelon = {
  songId: number;
  songTitle: string;
  artistName: string;
  artistThumbnail: string;
  category: string;
  albumTitle: string;
  albumThumbnail200: string;
  albumThumbnail500: string;
  albumThumbnail1000: string;
  lyrics: string;
  releasedAt: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type MusicLike = {
  id: number;
  createdAt: string;
  viewer: User;
  book: Book;
};

export type Music = {
  id: string;
  title: string;
  category: string;
  description: string;
  previewURL: string | null;
  previewType: PreviewType | null;
  mrURL: string | null;
  mrType: MrType | null;
  likeCount: number;
  isAllowRequest: boolean;
  isHide: boolean;
  isPaid: boolean;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  broadcaster: User;
  book?: Book;
  musicSourceOriginal: MusicSourceOriginal | null;
  musicSourceMelon: MusicSourceMelon | null;
  musicLikes?: MusicLike[];
};

export type MusicConfig = {
  isHide: boolean;
  isPaid: boolean;
  isAllowRequest: boolean;
};
