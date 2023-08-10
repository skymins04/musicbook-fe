import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import { Dimmer, Divider } from "@components";
import { useGlobalDisclosure, useDebounceState } from "@hooks";
import { clickStopPropagation, isEmptyTrimedString } from "@utils";
import { useGetBookSearch, useGetMusicSearch } from "@fetchers";
import { SearchBar } from "../SearchBar";
import { SearchSpotlightEmptyResult } from "./SearchSpotlightEmptyResult";
import { SearchSpotlightSection } from "./SearchSpotlightSection";
import { SearchSpotlightBookMockResult } from "./SearchSpotlightBookMockResult";
import { SearchSpotlightBookResult } from "./SearchSpotlightBookResult";
import { SearchSpotlightMusicMockResult } from "./SearchSpotlightMusicMockResult";
import { SearchSpotlightMusicResult } from "./SearchSpotlightMusicResult";

export type SearchSpotlightProps = {
  wrapperClassNames?: string;
};

export const SearchSpotlight = ({
  wrapperClassNames,
}: SearchSpotlightProps) => {
  const [searchValue, setSearchValue] = useDebounceState("", 500);
  const searchBarRef = useRef<HTMLInputElement>(null);

  const { data: isOpen, setData: setIsOpen } = useGlobalDisclosure(
    "search-spotlight",
    false
  );
  const { data: searchBookResult, isLoading: isLoadingSearchBook } =
    useGetBookSearch({ q: searchValue, sort: "POPULAR", page: 1, perPage: 10 });
  const { data: searchMusicResult, isLoading: isLoadingSearchMusic } =
    useGetMusicSearch({ q: searchValue, page: 1, perPage: 10 });

  const handleFocusSearchBar = useCallback((isOpen: boolean) => {
    if (isOpen && searchBarRef.current) {
      searchBarRef.current.focus();
    }
  }, []);

  useEffect(() => {
    handleFocusSearchBar(isOpen);

    const handleKeyDownEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      <Dimmer
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(false);
        }}
        className={wrapperClassNames}
      />
      <SearchBar
        size="lg"
        wrapperClassName={classNames(
          "!w-[calc(100%-40px)] max-w-[500px] absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 duration-200",
          isOpen
            ? "opacity-1 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        )}
        onChange={(value) => {
          setSearchValue(value);
        }}
        ref={searchBarRef}
      />
      <div
        onClick={clickStopPropagation}
        className={classNames(
          "absolute left-[50%] top-[calc(30%+34px)] z-30 box-border flex w-[calc(100%-40px)] max-w-[500px] translate-x-[-50%] flex-col items-stretch justify-center gap-14 rounded-6 bg-white px-10 py-14 duration-200 dark:bg-gray-700",
          isOpen && !isEmptyTrimedString(searchValue)
            ? "opacity-1 scale-100"
            : "pointer-events-none scale-90 opacity-0"
        )}
      >
        <SearchSpotlightSection title="노래책" href="#" />
        <div className="h-max w-full overflow-x-auto overflow-y-hidden">
          {isLoadingSearchBook ? (
            <SearchSpotlightBookMockResult />
          ) : !searchBookResult || searchBookResult.data.length === 0 ? (
            <SearchSpotlightEmptyResult />
          ) : (
            <SearchSpotlightBookResult books={searchBookResult.data} />
          )}
        </div>
        <Divider />
        <SearchSpotlightSection title="수록곡" href="#" />
        {isLoadingSearchMusic ? (
          <SearchSpotlightMusicMockResult />
        ) : !searchMusicResult || searchMusicResult.data.length === 0 ? (
          <SearchSpotlightEmptyResult />
        ) : (
          <SearchSpotlightMusicResult musics={searchMusicResult.data} />
        )}
      </div>
    </>
  );
};
