import { DetailsHTMLAttributes, useState } from "react";
import classNames from "classnames";
import { ProfileImage } from "../ProfileImage";
import { AspectRatio } from "../AspectRatio";
import { SkeletonBaseProps } from "../Skeleton";

export type AvatarProps = {
  src: string;
} & SkeletonBaseProps &
  DetailsHTMLAttributes<HTMLButtonElement>;

export const Avatar = ({
  className,
  children,
  src,
  isShow,
  ...props
}: AvatarProps) => {
  const [isError, setIsError] = useState(false);

  return (
    <button
      {...props}
      className={classNames("group relative min-h-max min-w-max", className)}
    >
      <ProfileImage
        isShow={isShow}
        src={src}
        onError={() => setIsError(true)}
      />
      {!isError && (
        <AspectRatio
          className="!absolute left-0 top-0 h-full w-full rounded-full duration-200 group-hover:bg-blackAlpha-200"
          ratio={1}
        />
      )}
    </button>
  );
};
