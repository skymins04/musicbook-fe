import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { SWRConfig } from "swr/_internal";
import { RouterProgressProvider, ToastProvider } from "./globalProviders";

const GlobalDialogProvider = dynamic(() =>
  import("./globalProviders/DialogProvider").then((mod) => mod.DialogProvider)
);
const SearchSpotlight = dynamic(() =>
  import("@components/Search/SearchSpotlight/SearchSpotlight").then(
    (mod) => mod.SearchSpotlight
  )
);

export type ProviderRootProps = {
  children: ReactNode;
};

export const ProviderRoot = ({ children }: ProviderRootProps) => {
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        revalidateOnFocus: false,
      }}
    >
      {children}
      <GlobalDialogProvider />
      <SearchSpotlight wrapperClassNames="z-30" />
      <RouterProgressProvider />
      <ToastProvider />
    </SWRConfig>
  );
};
