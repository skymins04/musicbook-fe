import { ProviderRoot } from "@providers";
import "@/themes/base.css";
import type { AppContext, AppProps } from "next/app";
import { getCookie } from "@utils";
import { ThemeType } from "@hooks";

type MusicBookAppProps = {
  theme: ThemeType;
};

export default function App({
  Component,
  pageProps,
}: AppProps<MusicBookAppProps>) {
  return (
    <ProviderRoot {...pageProps}>
      <Component />
    </ProviderRoot>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const cookieString = ctx.req?.headers.cookie || "";
  const theme = getCookie(cookieString, "theme") as ThemeType | undefined;
  pageProps = { ...pageProps, theme: theme || "light" };

  return {
    pageProps,
  };
};
