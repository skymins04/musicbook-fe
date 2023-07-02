import classNames from "classnames";
import { AspectRatio } from "../AspectRatio";
import { useState } from "react";

export type ProfileImageProps = {
  className?: string;
  src: string;
  onError?: () => void;
  onLoad?: () => void;
};

export const ProfileImage = ({
  className,
  src,
  onError,
  onLoad,
}: ProfileImageProps) => {
  const [isError, setIsError] = useState(false);

  return (
    <AspectRatio className={classNames("w-full", className)} ratio={1}>
      {isError && (
        <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-200 duration-200 group-hover:bg-gray-300 group-active:bg-gray-400">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_851_22580)">
              <g clip-path="url(#clip1_851_22580)">
                <path
                  d="M16 18.5C20.1031 18.5 23.4286 15.2545 23.4286 11.25C23.4286 7.24551 20.1031 4 16 4C11.8969 4 8.57143 7.24551 8.57143 11.25C8.57143 15.2545 11.8969 18.5 16 18.5ZM21.2 20.3125H20.2308C18.9424 20.8902 17.5089 21.2188 16 21.2188C14.4911 21.2188 13.0634 20.8902 11.7692 20.3125H10.8C6.49375 20.3125 3 23.7223 3 27.925V30.2812C3 31.7822 4.24777 33 5.78571 33H26.2143C27.7522 33 29 31.7822 29 30.2812V27.925C29 23.7223 25.5062 20.3125 21.2 20.3125Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_851_22580">
                <rect width="32" height="32" fill="white" />
              </clipPath>
              <clipPath id="clip1_851_22580">
                <rect
                  width="26"
                  height="29"
                  fill="white"
                  transform="translate(3 4)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
      {!isError && (
        <img
          className="h-full w-full overflow-hidden rounded-full"
          src={src}
          alt="프로필 이미지"
          onLoad={onLoad}
          onError={() => {
            setIsError(true);
            onError && onError();
          }}
        />
      )}
    </AspectRatio>
  );
};
