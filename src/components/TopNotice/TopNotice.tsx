import { Close } from "@mui/icons-material";
import { Button } from "..";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useGetNotice } from "@fetchers";
import { useBoolean } from "@hooks";
import { isValidStartEndAt } from "@utils";
import dayjs from "dayjs";

export type TopNoticeProps = {
  onClose?: () => void;
  onOpen?: () => void;
};

export const TopNotice = ({ onClose, onOpen }: TopNoticeProps) => {
  const [isOpen, setIsOpen] = useBoolean(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const wrapperRef = useRef<HTMLAnchorElement>(null);
  const contentsRef = useRef<HTMLSpanElement>(null);

  const { data } = useGetNotice();

  const handleCloseNotice = () => {
    setIsOpen.off();
    onClose && onClose();
  };

  const handleResize = () => {
    const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
    const contentsWidth = contentsRef.current?.offsetWidth || 0;
    setIsOverflow(wrapperWidth < contentsWidth);
  };

  useEffect(() => {
    if (data && isValidStartEndAt(dayjs(), data.startAt, data.endAt)) {
      setIsOpen.on();
      onOpen && onOpen();
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setTimeout(() => handleResize(), 100);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className={classNames(
            "relative box-border h-max w-full bg-teal-500 px-[72px] py-6 font-normal text-white duration-200 dark:bg-teal-200 dark:text-gray-800 tablet:px-48"
          )}
        >
          <a
            href={data?.link}
            target="_blank"
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
              {data?.message}
            </span>
            {isOverflow && (
              <span className="inline-block animate-noticeScroll">
                {data?.message}
              </span>
            )}
          </a>
          <Button
            title="공지 닫기"
            variant="ghost"
            size="xs"
            className="absolute right-12 top-[50%] !box-border !w-24 -translate-y-[50%] !text-white duration-200 dark:!text-gray-800"
            leftIcon={<Close sx={{ fontSize: "100%" }} />}
            onClick={handleCloseNotice}
          />
        </div>
      )}
    </>
  );
};
