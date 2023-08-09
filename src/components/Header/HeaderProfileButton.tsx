import { User } from "@apis";
import { Avatar, AvatarPopMenuItems, PopMenuButton } from "..";
import { useBoolean } from "@hooks";

export type HeaderProfileButtonProps = {
  user: User;
};

export const HeaderProfileButton = ({ user }: HeaderProfileButtonProps) => {
  const [isShowAvatar, setShowAvatar] = useBoolean(false);
  return (
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
      popMenuClassName="!w-[280px]"
      popMenuWrapperClassName="h-max max-h-[calc(100vh-84px-10px)]"
    />
  );
};
