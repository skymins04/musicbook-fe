import { IMAGES } from "@/assets";
import { useColorModeValue } from "@chakra-ui/react";
import classNames from "classnames";

export type LogoHeight = 70 | 60 | 50 | 30;

export type LogoProps = {
  height: LogoHeight;
  className?: string;
  isShowText?: boolean;
  isShowLogo?: boolean;
};

const logoFlexGap: Record<LogoHeight, string> = {
  70: "gap-[17.65px]",
  60: "gap-[15.7px]",
  50: "gap-[14.75px]",
  30: "gap-[6.85px]",
};

export const Logo = ({
  height = 70,
  className,
  isShowText = true,
  isShowLogo = true,
}: LogoProps) => {
  const icon = useColorModeValue<string, string>(
    IMAGES.COMMON.LOGO_ICON,
    IMAGES.COMMON.LOGO_ICON_DARK
  );
  const text = useColorModeValue<string, string>(
    IMAGES.COMMON.LOGO_TEXT,
    IMAGES.COMMON.LOGO_TEXT_DARK
  );

  return (
    <div
      className={classNames(
        "flex w-max items-center justify-start",
        logoFlexGap[height],
        className
      )}
    >
      {isShowLogo && <img style={{ height }} src={icon} alt="노래책" />}
      {isShowText && <img style={{ height }} src={text} alt="노래책" />}
    </div>
  );
};
