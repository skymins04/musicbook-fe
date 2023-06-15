export type Breakpoint =
  | 'mobile'
  | 'semi-tablet'
  | 'tablet'
  | 'tablet-only'
  | 'semi-desktop'
  | 'desktop';

export const screensBreakPoint = {
  desktop: '1221px',
  'semi-desktop': { min: '1025px', max: '1220px' },
  'tablet-only': { min: '431px', max: '1024px' },
  tablet: { max: '1024px' },
  'semi-tablet': { max: '670px' },
  mobile: { max: '430px' },
};
