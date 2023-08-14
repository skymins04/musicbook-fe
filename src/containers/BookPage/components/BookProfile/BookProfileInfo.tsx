import {
  ProfileImage,
  BookIdViewer,
  BookFollwerMusicCountViewer,
} from "@components";
import { useBookContext } from "@providers";
import { BookProfileButtons } from "./BookProfileButtons";

export const BookProfileInfo = () => {
  const book = useBookContext();

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
          <div className="flex w-full flex-col items-start justify-center gap-4 overflow-hidden text-14 font-normal text-gray-600">
            <BookIdViewer />
            <BookFollwerMusicCountViewer />
          </div>
        </div>
        <div className="flex w-max items-center justify-end gap-6">
          <BookProfileButtons />
        </div>
      </div>
    </div>
  );
};
