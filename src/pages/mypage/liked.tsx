import { User } from "@apis";
import { BaseLayout } from "@components";
import { MyLikedMusicPage } from "@containers";

export type MyLikedMusicPageRouterProps = {
  user?: User;
};

export default function MyLikedMusicPageRouter({
  user,
}: MyLikedMusicPageRouterProps) {
  return (
    <BaseLayout user={user}>
      <MyLikedMusicPage />
    </BaseLayout>
  );
}
