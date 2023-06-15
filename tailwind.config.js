const {
  typography,
  textStyle,
  textEllipsis,
} = require("./src/themes/typography");
const {
  theme: { colors },
} = require("@chakra-ui/react");
const screens = require("./src/themes/screens");
const layouts = require("./src/themes/layouts");
const border = require("./src/themes/border");
const background = require("./src/themes/background");
const effects = require("./src/themes/effects");
const animation = require("./src/themes/animation");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    backdropOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens,
    ...animation,
    ...layouts,
    ...background,
    ...border,
    ...effects,
    ...typography,
    colors,
    container: {},
    content: {
      none: "none",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out",
    },
  },
  plugins: [
    ({ addUtilities, addVariant }) => {
      addUtilities({
        ...textStyle,
        ...textEllipsis,
        "clip-rect-0": {
          clip: "rect(0px, 0px, 0px, 0px)",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".keep-all": { "word-break": "keep-all" },
        ".h-available": {
          height: "100%",
          "min-height": "-moz-available",
        },
      });

      addVariant("children", "& > *");
    },
    require("tailwind-scrollbar"),
  ],
};
