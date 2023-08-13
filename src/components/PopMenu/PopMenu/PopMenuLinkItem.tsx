import Link from "next/link";
import { PopMenuItem, PopMenuItemProps } from "./PopMenuItem";

export type PopMenuLinkItemProps = { href: string } & PopMenuItemProps;

export const PopMenuLinkItem = ({ href, ...props }: PopMenuLinkItemProps) => {
  return (
    <Link href={href} className="h-max w-full">
      <PopMenuItem {...props} />
    </Link>
  );
};
