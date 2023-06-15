import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { Menu as MenuIcon, MoreVert, Search } from "@mui/icons-material";
import classNames from "classnames";
import {
  CSMenuItem,
  DarkModeMenuItem,
  Divider,
  FeedbackMenuItem,
  LogInOutMenuItem,
  Logo,
  SettingsMenuItem,
} from "..";
import { useBreakpointSmaller, useGlobalDisclosure } from "@/hooks";
import Link from "next/link";

export type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const { setData: setIsOpenLoginDialog } = useGlobalDisclosure(
    "login-dialog",
    false
  );
  const { setData: setIsOpenLeftDrawer } = useGlobalDisclosure("drawer", false);
  const { data: isDrawerMinified, setData: setIsDrawerMinified } =
    useGlobalDisclosure("drawer-minified", false);
  const { setData: setIsOpenSearchSpotlight } = useGlobalDisclosure(
    "search-spotlight",
    false
  );

  const isTablet = useBreakpointSmaller("tablet");

  const handleClickHamburger = () => {
    if (isTablet) {
      setIsOpenLeftDrawer(true);
    } else {
      setIsDrawerMinified(!isDrawerMinified);
    }
  };

  return (
    <div
      className={classNames(
        "relative flex h-[56px] items-stretch justify-between border-b-1 border-gray-200 bg-white px-10 dark:border-gray-800 dark:bg-gray-700",
        className
      )}
    >
      <div className="flex items-center justify-start gap-8">
        <IconButton
          variant="ghost"
          icon={<MenuIcon />}
          aria-label="메뉴"
          onClick={handleClickHamburger}
        />
        <Link href="/">
          <div className="tablet:hidden">
            <Logo height={30} />
          </div>
          <div className="hidden tablet:block">
            <Logo isShowLogo={false} height={30} />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-end w-full gap-2">
        <IconButton
          variant="ghost"
          icon={<Search />}
          aria-label="검색"
          onClick={() => setIsOpenSearchSpotlight(true)}
        />
        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            variant="ghost"
            icon={<MoreVert />}
            aria-label="기타메뉴"
          />
          <MenuList>
            <DarkModeMenuItem />
            <LogInOutMenuItem />
            <Divider />
            <SettingsMenuItem />
            <Divider />
            <CSMenuItem />
            <FeedbackMenuItem />
          </MenuList>
        </Menu>
        <Button colorScheme="teal" onClick={() => setIsOpenLoginDialog(true)}>
          로그인
        </Button>
      </div>
    </div>
  );
};
