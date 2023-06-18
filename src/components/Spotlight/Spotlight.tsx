import { Fade, ScaleFade } from "@chakra-ui/react";
import { Search } from "@mui/icons-material";
import { ScreenGuard } from "../ScreenGuard/ScreenGuard";
import { useGlobalDisclosure } from "@/hooks";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { clickStopPropagation } from "@/utils";

export const Spotlight = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const { data: isOpenSearchSpotlight, setData: setIsOpenSearchSpotlight } =
    useGlobalDisclosure("search-spotlight", false);

  const isShowSearchResult = !!searchKeyword.trim();

  const closeSpotlight = () => {
    setIsOpenSearchSpotlight(false);
  };

  const handleKeyDownEsc = (e: globalThis.KeyboardEvent) => {
    if (e.key !== "Escape") return;
    closeSpotlight();
  };

  const handleInputKeyDownMap: Record<string, () => void> = {
    Enter() {
      console.log("pressed enter");
    },
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const handler = handleInputKeyDownMap[e.key];
    handler && handler();
  };

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    if (isOpenSearchSpotlight) {
      document.body.addEventListener("keydown", handleKeyDownEsc);
    }

    return () => {
      document.body.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [isOpenSearchSpotlight]);

  return (
    <>
      {isOpenSearchSpotlight && (
        <>
          <ScreenGuard isShow className="fixed left-0 top-0" />
          <ScaleFade
            className="fixed left-0 top-0 h-full w-full text-24 text-gray-600 dark:text-white"
            onClick={closeSpotlight}
            initialScale={0.9}
            in
          >
            <div
              className="absolute left-[50%] top-[20%] flex h-[60px] w-full max-w-[min(800px,80vw)] -translate-x-[50%] -translate-y-[50%] items-stretch justify-start rounded-8 bg-white pr-[30px] dark:bg-gray-700 tablet:max-w-[min(800px,calc(100vw-20px))]"
              onClick={clickStopPropagation}
            >
              <div className="flex h-full w-[60px] min-w-[60px] items-center justify-center">
                <Search />
              </div>
              <input
                type="search"
                className="h-full w-full bg-transparent focus:outline-none"
                placeholder="수록곡, 노래책, 스트리머 검색어 입력"
                onKeyDown={handleKeyDown}
                onChange={handleChangeInputValue}
              />
              {isShowSearchResult && (
                <Fade className="absolute left-0 top-[68px] w-full" in>
                  <div className="flex h-max w-full flex-col items-stretch justify-start gap-4 rounded-8 bg-white py-10 text-18 dark:bg-gray-700">
                    {searchResults.length === 0 && (
                      <div className="flex h-[50px] w-full items-center justify-center text-gray-400">
                        검색 결과가 없습니다
                      </div>
                    )}
                    {searchResults.map((itm) => (
                      <div className="flex h-[70px] w-full select-none items-stretch justify-start gap-16 px-16 py-10 duration-100 hover:cursor-pointer hover:bg-gray-800">
                        <div className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-teal-400"></div>
                        <div className="flex h-full w-full flex-col items-start justify-center">
                          <div>이것은 제목 텍스트</div>
                          <div className="text-14 text-gray-400">
                            이것은 설명글 텍스트
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Fade>
              )}
            </div>
          </ScaleFade>
        </>
      )}
    </>
  );
};
