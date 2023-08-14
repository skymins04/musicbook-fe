import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { SWRConfig } from "swr/_internal";

const GlobalDialogProvider = dynamic(() =>
  import("./globalProviders/DialogProvider").then((mod) => mod.DialogProvider)
);
const SearchSpotlight = dynamic(() =>
  import("@components/Search/SearchSpotlight/SearchSpotlight").then(
    (mod) => mod.SearchSpotlight
  )
);
const ToastProvider = dynamic(() =>
  import("./globalProviders/ToastProvider").then((mod) => mod.ToastProvider)
);
const RouterProgressProvider = dynamic(() =>
  import("./globalProviders/RouterProgressProvider").then(
    (mod) => mod.RouterProgressProvider
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
