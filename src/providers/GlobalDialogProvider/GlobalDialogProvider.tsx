import { ReactNode } from "react";
import { LoginDialogProvider } from "./LoginDialogProvider";

export type GlobalDialogProvider = {
  children: ReactNode;
};

export const GlobalDialogProvider = ({ children }: GlobalDialogProvider) => {
  return (
    <>
      {children}
      <LoginDialogProvider />
    </>
  );
};
