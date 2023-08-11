import { ProviderRoot } from "@providers";
import "@/themes/base.css";
import type { AppContext, AppProps } from "next/app";
import { getCookie } from "@utils";
import { ThemeType } from "@hooks";
import Head from "next/head";
import { IMAGES, JSONS } from "@constants";

type MusicBookAppProps = {
  theme: ThemeType;
};

export default function App({
  Component,
  pageProps,
}: AppProps<MusicBookAppProps>) {
  return (
    <ProviderRoot {...pageProps}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={IMAGES.FAVICON.APPLE_TOUCH_ICON}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={IMAGES.FAVICON.WEB_32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={IMAGES.FAVICON.WEB_16}
        />
        <link rel="manifest" href={JSONS.MANIFEST} />
        <link
          rel="mask-icon"
          href={IMAGES.FAVICON.SAFARI_PINNED}
          color="#2e9896"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
