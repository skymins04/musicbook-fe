import { Head, Html, Main, NextScript } from "next/document";

export default function Document(ctx: any) {
  const { theme } = ctx.__NEXT_DATA__.props.pageProps;
  return (
    <Html>
      <Head />
      <body className={theme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
