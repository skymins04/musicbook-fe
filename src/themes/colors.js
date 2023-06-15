module.exports = {
  colorConfig: {
    boxShadowColor: ({ theme }) => theme("colors"),
    caretColor: ({ theme }) => theme("colors"),
    accentColor: ({ theme }) => ({
      ...theme("colors"),
      auto: "auto",
    }),
    divideColor: ({ theme }) => theme("borderColor"),
    divideOpacity: ({ theme }) => theme("borderOpacity"),
    gradientColorStops: ({ theme }) => theme("colors"),
    placeholderColor: ({ theme }) => theme("colors"),
    placeholderOpacity: ({ theme }) => theme("opacity"),
    outlineColor: ({ theme }) => theme("colors"),
    ringColor: ({ theme }) => theme("colors"),
    ringOffsetColor: ({ theme }) => theme("colors"),
    ringOpacity: ({ theme }) => ({
      DEFAULT: "0.5",
      ...theme("opacity"),
    }),
    stroke: ({ theme }) => theme("colors"),
    textColor: ({ theme }) => theme("colors"),
    textDecorationColor: ({ theme }) => theme("colors"),
  },
  defaultColors: {
    inherit: "inherit",
    transparent: "transparent",
    twitch: "#793FEE",
    youtube: "#E62117",
    "dim-bg": "rgba(23, 20, 25, 0.65)",
    white: {
      100: "#fff",
      85: "rgba(255, 255, 255, 0.85)",
      65: "rgba(255, 255, 255, 0.65)",
      45: "rgba(255, 255, 255, 0.45)",
      25: "rgba(255, 255, 255, 0.25)",
    },
    black: {
      100: "#000",
      85: "rgba(0, 0, 0, 0.85)",
      65: "rgba(0, 0, 0, 0.65)",
      45: "rgba(0, 0, 0, 0.45)",
      25: "rgba(0, 0, 0, 0.25)",
    },
  },
  lightColors: {
    warning: "#E09204",
    success: "#60CC9A",
    danger: "#EB6899",
    "danger-lighten": "#FF9ACA",
    "danger-darken": "#E56FA4",
    info: "#506BEF",
    "warning-bg": "#FEF8E6",
    "success-bg": "#E7FAF2",
    "danger-bg": "#FCEDF2",
    "info-bg": "#ECF3FE",
    "surface-bg": "#F8F8FF",
    "on-surface-bg": "#ffffff",
    divider: "rgba(241, 241, 241, 1)",
    "gradation-right-bg":
      "linear-gradient(270deg, #FFFFFF 18.75%, rgba(255, 255, 255, 0.44) 58.95%, rgba(255, 255, 255, 0) 100%)",
    "floating-bg": "rgba(18, 18, 18, 1)",

    "input-default-stroke": "#b3b3b3",
    "input-bg": "#fff",
    "dropdown-bg": "#fff",
    "dialog-bg": "#fff",
    "popup-bg": "#fff",
    "card-bg": "#fff",

    text: {
      sidebar: "rgba(0, 0, 0, 0.75)",
      on: {
        primary: "#fff",
        secondary: "#221111",
        "darken-bg-default": "rgba(255, 255, 255, 0.65)",
        "darken-bg-active": "rgba(255, 255, 255, 0.85)",
      },
      active: "rgba(0, 0, 0, 0.85)",
      default: "rgba(0, 0, 0, 0.65)",
      muted: "rgba(0, 0, 0, 0.45)",
      disabled: "rgba(0, 0, 0, 0.25)",
      inverted: {
        active: "rgba(255, 255, 255, 0.85)",
        default: "rgba(255, 255, 255, 0.65)",
        muted: "rgba(255, 255, 255, 0.45)",
        disabled: "rgba(255, 255, 255, 0.25)",
      },
    },

    primary: {
      "01": "rgba(128, 31, 232, 1)", // rgb(128, 31, 232)
      "02": "hsla(269, 81%, 52%, 0.7)", // rgba(129, 33, 232, 0.7)
      "03": "hsla(269, 81%, 52%, 0.08)",
    },
    secondary: {
      "01": "#ffe13b",
      "02": "#ffe866",
      "03": "#fff6c2",
    },
    grey: {
      100: "#fff",
      95: "#F2F2F2",
      90: "#e6e6e6",
      80: "#CCCBCD",
      70: "#B2B2B3",
      60: "#99989A",
      50: "#807F81",
      40: "#666567",
      30: "#4D4C4D",
      20: "#333234",
      10: "#1A191A",
      "00": "#000000",
    },
  },
  darkColors: {
    warning: "#E2A44F",
    success: "#4EA064",
    danger: "#DD5592",
    "danger-lighten": "#F6308D",
    "danger-darken": "#972052",
    info: "#447EE9",

    "warning-bg": "#604724",
    "success-bg": "#2D342F",
    "danger-bg": "#3C2A34",
    "info-bg": "#232947",
    "surface-bg": "#212124",
    "on-surface-bg": "#272727",
    divider: "rgba(76, 76, 77, 0.5)",
    "gradation-right-bg":
      "linear-gradient(270deg, #272727 18.75%, rgba(39, 39, 39, 0.44) 58.95%, rgba(39, 39, 39, 0) 100%)",
    "floating-bg": "rgba(255, 255, 255, 0.85)",

    "input-default-stroke": "#272727",
    "input-bg": "#313131",
    "dropdown-bg": "#424242",
    "dialog-bg": "#2E2E2E",
    "popup-bg": "#363537",
    "card-bg": "#2E2E2E",

    text: {
      sidebar: "rgba(255, 255, 255, 0.45)",
      on: {
        primary: "#fff",
        secondary: "#7A6700",
        "darken-bg-default": "rgba(255, 255, 255, 0.65)",
        "darken-bg-active": "rgba(255, 255, 255, 0.85)",
      },
      active: "rgba(255, 255, 255, 0.85)",
      default: "rgba(255, 255, 255, 0.65)",
      muted: "rgba(255, 255, 255, 0.45)",
      disabled: "rgba(255, 255, 255, 0.25)",
      inverted: {
        active: "rgba(0, 0, 0, 0.85)",
        default: "rgba(0, 0, 0, 0.65)",
        muted: "rgba(0, 0, 0, 0.45)",
        disabled: "rgba(0, 0, 0, 0.25)",
      },
    },

    primary: {
      "01": "rgba(128, 81, 244, 1)",
      "02": "hsla(257, 88%, 64%, 0.7)",
      "03": "hsla(257, 88%, 64%, 0.16)",
    },
    secondary: {
      "01": "#DDC847",
      "02": "#E0CD57",
      "03": "#EFE5A9",
    },
    grey: {
      100: "#000",
      95: "#0D0D0D",
      90: "#1A191A",
      80: "#333234",
      70: "#4D4C4D",
      60: "#666567",
      50: "#807F81",
      40: "#99989A",
      30: "#B3B2B3",
      20: "#CBCBCC",
      10: "#E6E6E6",
      "00": "#fff",
    },
  },
  shadowColors: {
    lightColors: {
      none: "none",
      "ibox-shadow": "1px 4px 24px rgba(221, 213, 230, 0.2)",
      "box-border": "inset -1px -1px 0px #E6E6E6, inset 1px 1px 0px #E6E6E6",
      "tab-outline-top":
        "inset -1px 0px 0px #B2B2B3, inset 0px 1px 0px #B2B2B3, inset 1px 0px 0px #B2B2B3",
      "tab-outline-bottom":
        "inset -1px 0px 0px #B2B2B3, inset 0px -1px 0px #B2B2B3, inset 1px 0px 0px #B2B2B3",
      "tab-box-outline":
        "inset 0px 1px 0px #B2B2B3, inset -1px 0px 0px #B2B2B3, inset 0px -1px 0px #B2B2B3, inset 1px 0px 0px #B2B2B3",
      "sidebar-right-border": "inset 0px -1px 0px rgba(232, 233, 237, 0.05)",
      "top-border": "inset 0px 1px 0px #F2F2F2",
      "right-border": "inset -1px 0px 0px #F2F2F2",
      "bottom-border": "inset 0px -1px 0px #F2F2F2",
      "bottom-active-border": "inset 0px -3px 0px rgba(0, 0, 0, 0.85)",
      popup:
        "0px 4px 24px rgba(0, 0, 0, 0.25), inset -1px -1px 1px rgba(255, 255, 255, 0.08), inset 1px 1px 1px rgba(255, 255, 255, 0.08)",
      "bottom-border-default": "inset 0px -2px 0px #F2F2F2",
      "bottom-border-hover": "inset 0px -2px 0px rgb(128 31 232 / 1)",
      "bottom-border-focus": "inset 0px -2px 0px #506BEF",
      "sidebar-top-divider": "inset 0px 1px 0px #F5F4FE",
      "sidebar-right-divider": "inset -1px 0px 0px #E7E5FA",
      "sidebar-bottom-divider": "inset 0px -1px 0px #EFEFEF",
    },
    darkColors: {
      none: "none",
      "ibox-shadow":
        "1px 1px 20px rgba(0, 0, 0, 0.05), -1px -1px 10px rgba(128, 31, 232, 0.05)",
      "box-border": "inset -1px -1px 0px #3C3D3D, inset 1px 1px 0px #3C3D3D",
      "tab-outline-top":
        "inset -1px 0px 0px #4C4C4D, inset 0px 1px 0px #4C4C4D, inset 1px 0px 0px #4C4C4D",
      "tab-outline-bottom":
        "inset -1px 0px 0px #4C4C4D, inset 0px -1px 0px #4C4C4D, inset 1px 0px 0px #4C4C4D",
      "tab-box-outline":
        "inset 0px 1px 0px #4C4C4D, inset -1px 0px 0px #4C4C4D, inset 0px -1px 0px #4C4C4D, inset 1px 0px 0px #4C4C4D",
      "sidebar-right-border": "inset -1px 0px 0px #333234",
      "top-border": "inset 0px 1px 0px rgba(76, 76, 77, 0.5)",
      "right-border": "inset -1px 0px 0px rgba(76, 76, 77, 0.5)",
      "bottom-border": "inset 0px -1px 0px rgba(76, 76, 77, 0.5)",
      "bottom-active-border": "inset 0px -3px 0px rgba(255, 255, 255, 0.85)",
      popup:
        "0px 4px 32px rgba(51, 51, 51, 0.08), inset -1px -1px 1px rgba(255, 255, 255, 0.08), inset 1px 1px 1px rgba(255, 255, 255, 0.08)",
      "bottom-border-default": "inset 0px -2px 0px rgba(76, 76, 77, 0.8)",
      "bottom-border-hover": "inset 0px -2px 0px rgb(128 81 244 / 1)",
      "bottom-border-focus": "inset 0px -2px 0px #447EE9",
      "sidebar-top-divider": "inset 0px 1px 0px rgba(190, 189, 193, 0.1)",
      "sidebar-right-divider": "inset -1px 0px 0px #333234",
      "sidebar-bottom-divider": "inset 0px -1px 0px #333234",
    },
  },
};
