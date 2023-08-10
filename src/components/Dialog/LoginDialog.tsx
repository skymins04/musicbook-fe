import Image from "next/image";
import { Button } from "..";
import { Dialog, DialogProps } from "./Dialog";
import { IMAGES } from "@constants";
import { useTheme } from "@hooks";
import { GETUserLoginGoogle, GETUserLoginTwitch } from "@apis";

export type LoginDialogProps = Omit<DialogProps, "children" | "header">;

export const LoginDialog = (props: LoginDialogProps) => {
  const { theme } = useTheme();

  const handleClickLoginTwitch = () => {
    GETUserLoginTwitch();
  };

  const handleClickLoginGoogle = () => {
    GETUserLoginGoogle();
  };

  return (
    <Dialog {...props} header="로그인" headerClassName="border-none">
      <p className="mb-24 whitespace-pre-wrap text-center text-16">
        소셜로그인으로 간편하게 노래책을 시작하세요!
      </p>
      <Button
        className="mb-10 box-border w-full"
        size="lg"
        color="twitch"
        onClick={handleClickLoginTwitch}
      >
        <Image
          width={18}
          height={18}
          src={
            theme === "light"
              ? IMAGES.COMMON.TWITCH_WHTIE
              : IMAGES.COMMON.TWITCH_DARK
          }
          alt="트위치"
        />{" "}
        트위치로 로그인
      </Button>
      <Button
        className="box-border w-full"
        size="lg"
        variant={theme === "light" ? "outlined" : "solid"}
        color="secondary"
        onClick={handleClickLoginGoogle}
      >
        <Image
          width={18}
          height={18}
          src={IMAGES.COMMON.GOOGLE_COLORED}
          alt="구글"
        />{" "}
        구글로 로그인
      </Button>
    </Dialog>
  );
};
