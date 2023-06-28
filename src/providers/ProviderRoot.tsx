import { ReactNode } from "react";

export type ProviderRootProps = {
  children: ReactNode;
};

export const ProviderRoot = ({ children }: ProviderRootProps) => {
  return children;
};
