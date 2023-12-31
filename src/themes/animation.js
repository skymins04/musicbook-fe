module.exports = {
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite",
    "progress-animation": "progressAnimation 1s linear forwards",
    "notify-fade": "fade linear 0.2s forwards",
    "slide-up": "slide_up 1s forwards",
    jump: "jump 2s ease infinite",
    "fade-in": "fade_in 0.2s ease-in-out forwards",
    "fade-out": "fade_out 0.2s ease-in-out forwards",
    skeletonLoading: "skeletonLoading 2s linear infinite",
    popUp: "popUp 0.2s ease-in-out forwards",
    noticeScroll: "noticeScroll 10s linear infinite",
  },
  transitionDelay: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1000: "1000ms",
  },
  transitionDuration: {
    DEFAULT: "300ms",
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1000: "1000ms",
  },
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    colors:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
  },
  willChange: {
    auto: "auto",
    scroll: "scroll-position",
    contents: "contents",
    transform: "transform",
  },
  keyframes: {
    noticeScroll: {
      "0%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(calc(-100% - 48px))",
      },
    },
    popUp: {
      "0%": {
        opacity: "0",
        transform: "scale(0.9)",
        transformOrigin: "center center",
      },
      "100%": {
        opacity: "1",
        transform: "scale(1)",
        transformOrigin: "center center",
      },
    },
    skeletonLoading: {
      "0%": {
        left: "-300%",
      },
      "100%": {
        left: "300%",
      },
    },
    spin: {
      "0%": {
        transform: "rotate(0deg)",
        transformOrigin: "center center",
      },
      "100%": {
        transform: "rotate(360deg)",
        transformOrigin: "center center",
      },
    },
    progressAnimation: {
      "0%": {
        strokeDashoffset: 100,
      },
      "100%": {
        strokeDashoffset: 0,
      },
    },
    fade: {
      "0%": {
        backgroundColor: "rgba(0,0,0,0)",
      },
      "100%": {
        backgroundColor: "rgba(0,0,0,0.7)",
      },
    },
    slide_up: {
      "0%": {
        transform: "translateY(100%)",
      },
      "50%": {
        transform: "translateY(-70%)",
      },
      "100%": {
        transform: "translateY(-10%)",
      },
    },
    jump: {
      "0%": { transform: "scale(1,1)    translateY(0)" },
      "10%": { transform: "scale(1.1,.9) translateY(0)" },
      "30%": { transform: "scale(.9,1.1) translateY(-40%)" },
      "50%": { transform: "scale(1,1)    translateY(0)" },
      "100%": { transform: "scale(1,1)    translateY(0)" },
    },
    fade_in: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    fade_out: {
      "0%": { opacity: 1 },
      "100%": { opacity: 0 },
    },
  },
};
