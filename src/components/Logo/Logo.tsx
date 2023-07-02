import { IMAGES } from "@/constants";
import classNames from "classnames";
import { Skeleton } from "../Skeleton";
import { useState } from "react";

export type LogoSize = "xs" | "sm" | "md" | "lg";

export type LogoProps = {
  isShowIcon?: boolean;
  isShowText?: boolean;
  size?: LogoSize;
  className?: string;
  innnerClassName?: string;
};

const LogoWrapperStyleMap: Record<LogoSize, string> = {
  lg: "gap-[18px]",
  md: "gap-[16px]",
  sm: "gap-[15px]",
  xs: "gap-[7px]",
};

const LogoIconStyleMap: Record<LogoSize, string> = {
  lg: "w-[50px] min-w-[50px] h-[70px]",
  md: "w-[43px] min-w-[43px] h-[60px]",
  sm: "w-[36px] min-w-[36px] h-[50px]",
  xs: "w-[22px] min-w-[22px] h-[30px]",
};

const LogoTextStyleMap: Record<LogoSize, string> = {
  lg: "w-[248px] min-w-[248px] h-[70px]",
  md: "w-[210px] min-w-[210px] h-[60px]",
  sm: "w-[174px] min-w-[174px] h-[50px]",
  xs: "w-[107px] min-w-[107px] h-[30px]",
};

export const Logo = ({
  isShowIcon = true,
  isShowText = true,
  size = "lg",
  className,
  innnerClassName,
}: LogoProps) => {
  const [isLoadedIcon, setIsLoadedIcon] = useState(false);
  const [isLoadedIconDark, setIsLoadedIconDark] = useState(false);
  const [isLoadedText, setIsLoadedText] = useState(false);
  const [isLoadedTextDark, setIsLoadedTextDark] = useState(false);

  const isLoaded =
    isLoadedIcon && isLoadedIconDark && isLoadedText && isLoadedTextDark;

  return (
    <Skeleton isShow={isLoaded} className={className}>
      <div
        className={classNames(
          "flex items-center justify-start",
          LogoWrapperStyleMap[size],
          innnerClassName
        )}
      >
        {isShowIcon && (
          <>
            <img
              className={classNames(
                "block dark:hidden",
                LogoIconStyleMap[size]
              )}
              src={IMAGES.COMMON.LOGO_ICON}
              onLoad={() => setIsLoadedIcon(true)}
              alt="노래책"
            />
            <img
              className={classNames(
                "hidden dark:block",
                LogoIconStyleMap[size]
              )}
              src={IMAGES.COMMON.LOGO_ICON_DARK}
              onLoad={() => setIsLoadedIconDark(true)}
              alt="노래책"
            />
          </>
        )}
        {isShowText && (
          <>
            <img
              className={classNames(
                "block dark:hidden",
                LogoTextStyleMap[size]
              )}
              src={IMAGES.COMMON.LOGO_TEXT}
              onLoad={() => setIsLoadedText(true)}
              alt="노래책"
            />
            <img
              className={classNames(
                "hidden dark:block",
                LogoTextStyleMap[size]
              )}
              src={IMAGES.COMMON.LOGO_TEXT_DARK}
              onLoad={() => setIsLoadedTextDark(true)}
              alt="노래책"
            />
          </>
        )}
      </div>
    </Skeleton>
  );
};
