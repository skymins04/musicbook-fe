import { BreakPointHooks } from "@react-hooks-library/core";

const breakpoints = {
  desktop: 1221,
  tablet: 1024,
  "semi-tablet": 670,
  mobile: 430,
};

export const {
  useBetween: useBreakpointBetween,
  useGreater: useBreakpointGreater,
  useSmaller: useBreakpointSmaller,
} = BreakPointHooks(breakpoints);
