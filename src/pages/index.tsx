import { BaseLayout } from "@components";
import { MainPage } from "@containers";
import Head from "next/head";

export default function Index() {
  return (
    <BaseLayout>
      <Head>
        <title>노래책</title>
      </Head>
      <MainPage />
    </BaseLayout>
  );
}
