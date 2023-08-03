import { ReactNode } from "react";
import { GlobalDialogProvider } from "./GlobalDialogProvider";

export type ProviderRootProps = {
  children: ReactNode;
};

export const ProviderRoot = ({ children }: ProviderRootProps) => {
  return <GlobalDialogProvider>{children}</GlobalDialogProvider>;
};
