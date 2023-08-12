import { Banner as BannerType, BannerJSON } from "@apis";
import { IMAGES } from "@constants";
import { useGetBanner } from "@fetchers";
import { useCaroucel } from "@hooks";
import { isValidStartEndAt } from "@utils";
import classNames from "classnames";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export type BannerVariant = "mobile-1" | "desktop-1";

export type BannerProps = {
  bannerId: string;
  variant: BannerVariant;
  className?: string;
};

const bannerBaseStyle = classNames(
  "bg-gray-200 dark:bg-gray-700 relative overflow-hidden"
);
const bannerDefaultImageMap: Record<BannerVariant, string> = {
  "mobile-1": IMAGES.COMMON.DEFAULT_BANNER_MOBILE,
  "desktop-1": IMAGES.COMMON.DEFAULT_BANNER_DESKTOP,
};
const bannerVariantStyleMap: Record<BannerVariant, string> = {
  "mobile-1": classNames(
    "aspect-[300/72] max-h-[72px] w-full !max-w-[300px] rounded-6"
  ),
  "desktop-1": classNames("w-[150px] h-[500px] min-w-[150px] rounded-6"),
};
const bannerImageWrapperBaseStyle = classNames(
  "flex justify-start items-center w-full h-full duration-300"
);
const bannerImageWrapperStyleMap: Record<BannerVariant, string> = {
  "mobile-1": classNames(""),
  "desktop-1": classNames("flex-col"),
};
const bannerImageWrapperTransitionMap: Record<
  BannerVariant,
  (idx: number) => string
> = {
  "mobile-1": (idx) => `translateX(calc(100% * ${idx} * -1))`,
  "desktop-1": (idx) => `translateY(calc(100% * ${idx} * -1))`,
};

const getBanner = (
  bannerJSON: BannerJSON | undefined,
  bannerId: string,
  defaultBannerImageSrc: string
) => {
  const banners: BannerType[] = bannerJSON
    ? bannerJSON[bannerId]
    : [
        {
          id: "default",
          title: "노래책",
          src: defaultBannerImageSrc,
          href: "",
          startAt: null,
          endAt: null,
        },
      ];
  return banners;
};

export const Banner = ({ className, bannerId, variant }: BannerProps) => {
  const { data } = useGetBanner();
  const now = dayjs();
  const banners = getBanner(data, bannerId, bannerDefaultImageMap[variant]);
  const filteredBanners = banners.filter(({ startAt, endAt }) =>
    isValidStartEndAt(now, startAt, endAt)
  );

  const [bannerIndex, setBannerIndex] = useCaroucel(
    filteredBanners.length,
    5000
  );

  return (
    <div
      className={classNames(
        bannerBaseStyle,
        bannerVariantStyleMap[variant],
        className
      )}
    >
      <div
        className={classNames(
          bannerImageWrapperBaseStyle,
          bannerImageWrapperStyleMap[variant]
        )}
        style={{
          transform: bannerImageWrapperTransitionMap[variant](bannerIndex),
        }}
      >
        {filteredBanners.map(({ id, href, src, title }) => (
          <Link
            key={id}
            href={href || ""}
            title={title}
            className="relative h-full min-h-full w-full min-w-full"
          >
            <Image fill src={src} alt={title} />
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 flex w-full items-center justify-center gap-3">
        {filteredBanners.map(({ id }, idx) => (
          <button
            key={id}
            className={classNames(
              "h-6 w-6 rounded-full",
              bannerIndex === idx ? "bg-blackAlpha-600" : "bg-blackAlpha-400"
            )}
            onClick={() => setBannerIndex(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};
