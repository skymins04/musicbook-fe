import Image from "next/image";
import { IMAGES } from "@constants";
import { useBoolean } from "@hooks";
import { useBookContext } from "@providers";

export const BookProfileBackgroundImage = () => {
  const [isError, setIsError] = useBoolean(false);
  const book = useBookContext();

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
