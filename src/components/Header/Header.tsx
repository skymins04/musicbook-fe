import classNames from "classnames";
import Link from "next/link";
import { Logo } from "..";
import { useGetUserMe } from "@fetchers";
import { HeaderSearchButton } from "./HeaderSearchButton";
import { HeaderLoginButton } from "./HeaderLoginButton";
import { HeaderEtcPopMenuButton } from "./HeaderEtcPopMenuButton";
import { HeaderProfileButton } from "./HeaderProfileButton";
import { HeaderToggleDrawerButton } from "./HeaderToggleDrawerButton";

export type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const { data: user } = useGetUserMe();

  return (
    <div
      className={classNames(
        "z-20 box-border flex h-[56px] w-full items-stretch justify-between bg-white px-12 duration-200 dark:bg-gray-700",
        className
      )}
    >
      <div className="flex h-full items-center justify-start gap-8">
        <HeaderToggleDrawerButton />
        <Link href="/">
          <Logo size="xs" className="flex semi-tablet:hidden" />
          <Logo
            size="xs"
            className="hidden semi-tablet:flex"
            isShowIcon={false}
          />
        </Link>
      </div>
      <div className="flex h-full items-center justify-end">
        <HeaderSearchButton />
        {user ? (
          <HeaderProfileButton user={user} />
        ) : (
          <>
            <HeaderEtcPopMenuButton />
            <HeaderLoginButton />
          </>
        )}
      </div>
    </div>
  );
};
