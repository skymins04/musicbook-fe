import { BaseLayout } from "@components";
import { BookPage, BookPageProps } from "@containers";
import { getServerSideBookPageProps } from "@containers/BookPage/getServerSideBookPageProps";
import Head from "next/head";

export const getServerSideProps = getServerSideBookPageProps;

export default function BookPageRouter(props: BookPageProps) {
  return (
    <BaseLayout>
      <Head>
        <title>노래책</title>
      </Head>
      <BookPage {...props} />
    </BaseLayout>
  );
}
