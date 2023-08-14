import { Button, ProfileImage } from "@components";
import { BookProfileBaseProps } from "./BookProfile";
import { getBookId } from "@utils";

export type BookProfileInfoProps = BookProfileBaseProps;

export const BookProfileInfo = ({ book }: BookProfileInfoProps) => {
  return (
    <div className="box-border flex h-[130px] w-full justify-between gap-20 bg-white px-20 py-10 duration-200 dark:bg-gray-700 tablet:h-[160px] mobile:h-[220px] mobile:pt-[70px]">
      <div className="relative flex h-[130px] w-[130px] items-center justify-center tablet:h-[160px] tablet:w-[90px] mobile:absolute">
        <ProfileImage
          className="relative bottom-20 h-[130px] w-[130px] rounded-full bg-white ring-8 ring-white duration-200 dark:bg-gray-700 dark:ring-gray-700 tablet:bottom-10 tablet:h-[90px] tablet:w-[90px] mobile:bottom-[120px]"
          src={book.thumbnailURL || book.broadcaster?.profileImgURL || ""}
        />
      </div>
      <div className="flex h-full w-[calc(100%-130px-20px)] items-center justify-between gap-20 tablet:w-[calc(100%-90px-20px)] tablet:flex-col tablet:items-start tablet:justify-center tablet:gap-10 mobile:w-full">
        <div className="relative flex w-full flex-col items-start justify-center gap-10 overflow-hidden">
          <div className="flex w-full flex-col items-start justify-center overflow-hidden text-gray-700 duration-200 dark:text-white">
            <h1 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-24 font-bold tablet:text-18">
              {book.title}
            </h1>
            <h2 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-14 font-normal leading-1">{`(${book.broadcaster?.displayName})`}</h2>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-4 overflow-hidden text-14 font-normal text-gray-500">
            <button className="w-full max-w-max overflow-hidden text-ellipsis whitespace-nowrap text-left hover:underline">
              {getBookId(book)}
            </button>
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">{`팔로워 ${
              book.likeCount
            }명 · 수록곡 ${book.musics?.length ?? 0}개`}</div>
          </div>
        </div>
        <div className="flex w-max items-center justify-end gap-6">
          <Button size="sm">수록곡 추가</Button>
          <Button size="sm" color="secondary">
            노래책 관리
          </Button>
        </div>
      </div>
    </div>
  );
};
