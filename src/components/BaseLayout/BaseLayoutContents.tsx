import { ReactNode } from "react";

export type BaseLayoutContentsProps = {
  children: ReactNode;
};

export const BaseLayoutContents = ({ children }: BaseLayoutContentsProps) => {
  return (
    <div className="order-2 w-full overflow-auto overflow-x-hidden">
      {children}
    </div>
  );
};
