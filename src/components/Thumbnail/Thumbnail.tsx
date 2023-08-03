import classNames from "classnames";
import { AspectRatio } from "../AspectRatio";
import { ReactNode, useState } from "react";
import { IMAGES } from "@/constants";
import { Skeleton, SkeletonBaseProps } from "../Skeleton";

export type ThumbnailProps = {
  className?: string;
  ratio?: number;
  src: string;
  alt: string;
  onLoad?: () => void;
  children?: ReactNode;
} & SkeletonBaseProps;

export const Thumbnail = ({
  className,
  ratio = 1,
  src,
  alt,
  onLoad,
  isShow,
  children,
}: ThumbnailProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Skeleton className={classNames("!w-full", className)} isShow={isShow}>
      <AspectRatio
        ratio={ratio}
        className={classNames("w-full")}
        contentAreaClassName="flex justify-stretch items-stretch"
      >
        <img
          className="h-full w-full object-cover"
          src={imageSrc}
          alt={alt}
          onLoad={onLoad}
          onError={() => setImageSrc(IMAGES.COMMON.DEFAULT_THUMBNAIL)}
        />
      </AspectRatio>
      {children}
    </Skeleton>
  );
};
