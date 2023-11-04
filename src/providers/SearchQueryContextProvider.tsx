import { ReactNode, createContext, useContext } from "react";

const SearchQueryContext = createContext<string>(undefined!);

export const useSearchQueryContext = () => useContext(SearchQueryContext);

export type SearchQueryContextProviderProps = {
  children: ReactNode;
  q: string;
};

export const SearchQueryContextProvider = ({
  children,
  q,
}: SearchQueryContextProviderProps) => {
  return <SearchQueryContext.Provider value={q}>{children}</SearchQueryContext.Provider>;
};
