import { GETBookById } from "@apis";
import { GetServerSideProps } from "next";
import { BookPageProps } from "./BookPage";

const NotFoundBookError = new Error("not found book");

export const getServerSideBookPageProps: GetServerSideProps<
  BookPageProps
> = async (ctx) => {
  try {
    const params = ctx.params as { bookId: string } | undefined;
    if (!params) throw NotFoundBookError;
    const { bookId } = params;

    const book = await GETBookById(bookId);
    if (book) {
      return {
        props: {
          book,
        },
      };
    }
    throw NotFoundBookError;
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
