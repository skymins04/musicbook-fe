import classNames from "classnames";
import { Avatar, Button, Logo, PopMenuButton } from "..";
import { Menu, MoreVert, Search } from "@mui/icons-material";
import Link from "next/link";
import { useGlobalDisclosure } from "@hooks/useGlobalDisclosure";
import { useGetUserMe } from "@fetchers/user";
import { useBoolean } from "@hooks/useBoolean";
import { AvatarPopMenuItems } from "./AvatarPopMenuItems";
import { EtcPopMenuItems } from "./EtcPopMenuItems";

export type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const [isShowAvatar, setShowAvatar] = useBoolean(false);
  const { toggle: toggleDrawer } = useGlobalDisclosure("drawer", false);
  const { on: showSearchSpotlight } = useGlobalDisclosure(
    "search-spotlight",
    false
  );
  const { on: showLoginDialog } = useGlobalDisclosure("login-dialog", false);

  const { data: user } = useGetUserMe();

  return (
    <div
      className={classNames(
        "box-border flex h-[56px] w-full items-stretch justify-between bg-white px-12 duration-200 dark:bg-gray-700",
        className
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
        <PopMenuButton
          btn={
            <Button
              variant="ghost"
              color="secondary"
              size="md"
              leftIcon={<MoreVert sx={{ fontSize: "100%" }} />}
              className="box-border !w-[40px] mobile:hidden"
            />
          }
          menuItems={<EtcPopMenuItems />}
          menuDirection="bottom-left"
          popMenuClassName="!w-[200px]"
        />
        {user ? (
          <PopMenuButton
            btn={
              <Avatar
                isShow={isShowAvatar}
                src={user.profileImgURL}
                className="ml-8 w-[40px]"
                onLoad={setShowAvatar.on}
                onError={setShowAvatar.on}
              />
            }
            menuItems={<AvatarPopMenuItems />}
            menuDirection="bottom-left"
            popMenuClassName="!w-[200px]"
          />
        ) : (
          <Button
            variant="solid"
            color="primary"
            size="md"
            className="ml-8 mobile:hidden"
            onClick={showLoginDialog}
          >
            로그인
          </Button>
        )}
      </div>
    </div>
  );
};
