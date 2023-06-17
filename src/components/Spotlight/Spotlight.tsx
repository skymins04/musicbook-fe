import { ScaleFade } from "@chakra-ui/react";
import { Search } from "@mui/icons-material";
import { ScreenGuard } from "../ScreenGuard/ScreenGuard";
import classNames from "classnames";

export type Spotlight = {
  className?: string;
  isShow?: boolean;
  onClose?: () => void;
};

export const Spotlight = ({ className, isShow, onClose }: Spotlight) => {
  return (
    <>
      {isShow && (
        <ScaleFade
          className="fixed top-0 left-0 w-full h-full text-black text-24"
          onClick={onClose}
          initialScale={0.9}
          in={isShow}
        >
          <ScreenGuard isShow className="fixed left-0" />
          <div
            className="absolute left-[50%] top-[50%] flex h-[60px] w-full max-w-[min(800px,80vw)] -translate-x-[50%] -translate-y-[50%] items-stretch justify-start rounded-8 bg-white pr-[30px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full w-[60px] min-w-[60px] items-center justify-center">
              <Search />
            </div>
            <input
              type="text"
              className="w-full h-full bg-transparent focus:outline-none"
              placeholder="수록곡, 노래책, 스트리머 검색어 입력"
            />
          </div>
        </ScaleFade>
      )}
    </>
  );
};
