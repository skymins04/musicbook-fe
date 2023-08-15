import { BaseLayout } from "@components";
import { BookPage, BookPageProps } from "@containers";
import { getServerSideBookPageProps } from "@containers/BookPage/getServerSideBookPageProps";

export const getServerSideProps = getServerSideBookPageProps;

export default function BookPageRouter(props: BookPageProps) {
  return (
    <BaseLayout>
      <BookPage {...props} />
    </BaseLayout>
  );
}
