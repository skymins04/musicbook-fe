import { ScaleFade } from "@chakra-ui/react";
import { Search } from "@mui/icons-material";
import { ScreenGuard } from "../ScreenGuard/ScreenGuard";
import { useGlobalDisclosure } from "@/hooks";

export const Spotlight = () => {
  const { data: isOpenSearchSpotlight, setData: setIsOpenSearchSpotlight } =
    useGlobalDisclosure("search-spotlight", false);

  return (
    <>
      {isOpenSearchSpotlight && (
        <>
          <ScreenGuard isShow className="fixed top-0 left-0" />
          <ScaleFade
            className="fixed left-0 top-0 h-full w-full text-24 text-black"
            onClick={() => setIsOpenSearchSpotlight(false)}
            initialScale={0.9}
            in
          >
            <div
              className="absolute left-[50%] top-[50%] flex h-[60px] w-full max-w-[min(800px,80vw)] -translate-x-[50%] -translate-y-[50%] items-stretch justify-start rounded-8 bg-white pr-[30px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-full w-[60px] min-w-[60px] items-center justify-center">
                <Search />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent focus:outline-none"
                placeholder="수록곡, 노래책, 스트리머 검색어 입력"
              />
            </div>
          </ScaleFade>
        </>
      )}
    </>
  );
};
