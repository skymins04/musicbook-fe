import COMMON_LOGO_ICON from "./images/common/musicbook-logo-icon.svg";
import COMMON_LOGO_ICON_DARK from "./images/common/musicbook-logo-icon-dark.svg";
import COMMON_LOGO_TEXT from "./images/common/musicbook-logo-text.svg";
import COMMON_LOGO_TEXT_DARK from "./images/common/musicbook-logo-text-dark.svg";
import COMMON_DEFAULT_THUMBNAIL from "./images/common/musicbook-default-thumbnail.svg";

const COMMON_IMAGES: Record<string, string> = {
  LOGO_ICON: COMMON_LOGO_ICON.src,
  LOGO_ICON_DARK: COMMON_LOGO_ICON_DARK.src,
  LOGO_TEXT: COMMON_LOGO_TEXT.src,
  LOGO_TEXT_DARK: COMMON_LOGO_TEXT_DARK.src,
  DEFAULT_THUMBNAIL: COMMON_DEFAULT_THUMBNAIL.src,
};

export const IMAGES = {
  COMMON: COMMON_IMAGES,
};
