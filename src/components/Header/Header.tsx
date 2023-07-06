import classNames from "classnames";
import { Button, Logo } from "..";
import { Menu, MoreVert, Search } from "@mui/icons-material";
import Link from "next/link";
import { useGlobalDisclosure } from "@hooks/useGlobalDisclosure";

export type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const { toggle: toggleDrawer } = useGlobalDisclosure("drawer", false);
  const { on: showSearchSpotlight } = useGlobalDisclosure(
    "search-spotlight",
    false
  );
  const { on: showLoginDialog } = useGlobalDisclosure("login-dialog", false);

  return (
    <div
      className={classNames(
        "box-border h-max w-full overflow-x-hidden",
        className
      )}
    >
      <div
        className={classNames(
          "box-border flex h-[56px] w-full items-stretch justify-between bg-white px-12 dark:bg-gray-700"
        )}
      >
        <div className="flex items-center justify-start h-full gap-8">
          <Button
            variant="ghost"
            color="secondary"
            size="md"
            leftIcon={<Menu sx={{ fontSize: "100%" }} />}
            className="box-border !w-[40px]"
            onClick={toggleDrawer}
          />
          <Link href="/">
            <Logo size="xs" className="flex semi-tablet:hidden" />
            <Logo
              size="xs"
              className="hidden semi-tablet:flex"
              isShowIcon={false}
            />
          </Link>
        </div>
        <div className="flex items-center justify-end h-full">
          <Button
            variant="ghost"
            color="secondary"
            size="md"
            leftIcon={<Search sx={{ fontSize: "100%" }} />}
            className="box-border !w-[40px]"
            onClick={showSearchSpotlight}
          />
          <Button
            variant="ghost"
            color="secondary"
            size="md"
            leftIcon={<MoreVert sx={{ fontSize: "100%" }} />}
            className="box-border !w-[40px] mobile:hidden"
          />
          <Button
            variant="solid"
            color="primary"
            size="md"
            className="mobile:hidden"
            onClick={showLoginDialog}
          >
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};
