import { ReactNode } from "react";
import { SWRConfig } from "swr/_internal";
import dynamic from "next/dynamic";

const GlobalDialogProvider = dynamic(() =>
  import("./GlobalDialogProvider").then((mod) => mod.GlobalDialogProvider)
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
    </SWRConfig>
  );
};
