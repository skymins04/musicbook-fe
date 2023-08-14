import { Book } from "@apis";
import { ReactNode, createContext, useContext } from "react";

const BookContext = createContext<Book>(undefined!);

export const useBookContext = () => useContext(BookContext);

export type BookContextProviderProps = {
  children: ReactNode;
  book: Book;
};

export const BookContextProvider = ({
  children,
  book,
}: BookContextProviderProps) => {
  return <BookContext.Provider value={book}>{children}</BookContext.Provider>;
};
