import { User } from "@apis";
import { Avatar, AvatarPopMenuItems, PopMenuButton } from "..";

export type HeaderProfileButtonProps = {
  user: User;
};

export const HeaderProfileButton = ({ user }: HeaderProfileButtonProps) => {
  return (
    <PopMenuButton
      btn={<Avatar src={user.profileImgURL} className="ml-8 w-[40px]" />}
      menuItems={<AvatarPopMenuItems />}
      menuDirection="bottom-left"
      popMenuClassName="!w-[280px]"
      popMenuWrapperClassName="h-max max-h-[calc(100vh-84px-10px)]"
    />
  );
};
