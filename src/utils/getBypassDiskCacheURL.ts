export const getBypassDiskCacheURL = (url: string) => {
  const parsedURL = new URL(url);
  parsedURL.searchParams.append("v", new Date().getTime().toString());
  return parsedURL.toString();
};
