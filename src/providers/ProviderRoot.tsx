import { ReactNode } from "react";
import { GlobalDialogProvider } from "./GlobalDialogProvider";
import { SearchSpotlight } from "@components/Search";
import { SWRConfig } from "swr/_internal";

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
      <GlobalDialogProvider>
        {children}
        <SearchSpotlight wrapperClassNames="z-30" />
      </GlobalDialogProvider>
    </SWRConfig>
  );
};
