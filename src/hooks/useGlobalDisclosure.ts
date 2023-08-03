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

  const on = () => mutate(true);
  const off = () => mutate(false);
  const toggle = () => mutate(!data);

  return {
    data: data || false,
    setData: mutate,
    on,
    off,
    toggle,
    isLoading,
    error,
  };
};
