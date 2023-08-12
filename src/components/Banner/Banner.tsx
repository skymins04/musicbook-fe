import classNames from "classnames";

export type BannerVariant = "mobile-1" | "desktop-1";

export type BannerProps = {
  bannerId: string;
  variant: BannerVariant;
  className?: string;
};

const bannerBaseStyle = classNames("bg-gray-200");
const bannerVariantStyleMap: Record<BannerVariant, string> = {
  "mobile-1": classNames(
    "aspect-[300/72] max-h-[72px] w-full !max-w-[300px] rounded-6"
  ),
  "desktop-1": classNames("w-[150px] h-[500px] min-w-[150px] rounded-6"),
};

export const Banner = ({ className, bannerId, variant }: BannerProps) => {
  return (
    <div
      className={classNames(
        bannerBaseStyle,
        bannerVariantStyleMap[variant],
        className
      )}
    ></div>
  );
};
