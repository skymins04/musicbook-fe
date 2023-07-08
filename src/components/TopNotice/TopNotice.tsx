import { Close } from "@mui/icons-material";
import { Button } from "..";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

export const TopNotice = () => {
  const [notice, setNotice] = useState(
    "이건 매우 긴 한줄 공지 텍스트입니다. 이건 매우 긴 한줄 공지 텍스트입니다. 이건 매우 긴 한줄 공지 텍스트입니다. 이건 매우 긴 한줄 공지 텍스트입니다."
  );
  const [isOverflow, setIsOverflow] = useState(false);

  const wrapperRef = useRef<HTMLAnchorElement>(null);
  const contentsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window && wrapperRef.current && contentsRef.current) {
      const handleResize = () => {
        const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
        const contentsWidth = contentsRef.current?.offsetWidth || 0;
        setIsOverflow(wrapperWidth < contentsWidth);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [wrapperRef.current, contentsRef.current]);

  return (
    <div
      className={classNames(
        "duration:200 relative box-border h-max w-full bg-teal-500 px-48 py-6 font-normal text-white dark:bg-teal-200 dark:text-gray-800"
      )}
    >
      <a
        href="#"
        referrerPolicy="no-referrer"
        className={classNames(
          "flex w-full items-center gap-48 overflow-hidden whitespace-nowrap",
          isOverflow ? "justify-start" : "justify-center"
        )}
        ref={wrapperRef}
      >
        <span
          ref={contentsRef}
          className={classNames(
            "inline-block whitespace-nowrap",
            isOverflow ? "animate-noticeScroll" : "mx-auto"
          )}
        >
          {notice}
        </span>
        {isOverflow && (
          <span className="inline-block animate-noticeScroll">{notice}</span>
        )}
      </a>
      <Button
        variant="ghost"
        size="xs"
        className="duration:200 absolute right-4 top-[50%] !box-border !w-24 -translate-y-[50%] !text-white dark:!text-gray-800"
        leftIcon={<Close sx={{ fontSize: "100%" }} />}
      />
    </div>
  );
};
