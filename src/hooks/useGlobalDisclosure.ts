import useSWRImmutable from "swr/immutable";

type GlobalDisclosureKeys =
  | "login-dialog"
  | "drawer"
  | "drawer-minified"
  | "search-spotlight";

export const useGlobalDisclosure = (
  key: GlobalDisclosureKeys,
  defaultValue?: boolean
) => {
  const { data, mutate, isLoading, error } = useSWRImmutable<boolean>(
    key,
    null,
    {
      fallbackData: defaultValue,
      revalidateOnReconnect: false,
    }
  );

  return {
    data: data || false,
    setData: mutate,
    isLoading,
    error,
  };
};
