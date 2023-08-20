import { User } from "@apis";
import { BaseLayout } from "@components";
import { MainPage } from "@containers";

export type MainPageRouterProps = {
  user?: User;
};

export default function MainPageRouter({ user }: MainPageRouterProps) {
  return (
    <BaseLayout user={user}>
      <MainPage />
    </BaseLayout>
  );
}
