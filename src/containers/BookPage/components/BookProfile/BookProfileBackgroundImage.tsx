import { IMAGES } from "@constants";
import { useBoolean } from "@hooks";
import Image from "next/image";
import { BookProfileBaseProps } from "./BookProfile";

export type BookProfileBackgroundImageProps = BookProfileBaseProps;

export const BookProfileBackgroundImage = ({
  book,
}: BookProfileBackgroundImageProps) => {
  const [isError, setIsError] = useBoolean(false);

  return (
    <div className="relative aspect-[1800/292] w-full bg-[#D9D9D9] mobile:aspect-[1000/292]">
      <Image
        fill
        src={
          isError
            ? IMAGES.COMMON.DEFAULT_BOOK_BACKGROUND
            : book.backgroundImgURL || IMAGES.COMMON.DEFAULT_BOOK_BACKGROUND
        }
        onError={setIsError.on}
        alt={book.title}
        className=" object-cover"
      />
    </div>
  );
};
