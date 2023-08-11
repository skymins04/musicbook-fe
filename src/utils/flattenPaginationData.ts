export const flattenPaginationData = <T>(pages?: any[]): T[] | undefined => {
  return pages && pages.map((page) => page.data).flat();
};
