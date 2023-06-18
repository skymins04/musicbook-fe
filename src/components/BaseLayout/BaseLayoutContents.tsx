import { ReactNode } from "react";

export type BaseLayoutContentsProps = {
  children: ReactNode;
};

export const BaseLayoutContents = ({ children }: BaseLayoutContentsProps) => {
  return (
    <div className="order-2 w-full overflow-auto overflow-x-hidden p-[30px] text-gray-600 dark:text-white">
      {children}
    </div>
  );
};
