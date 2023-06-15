import { IconButton, useBoolean } from "@chakra-ui/react";
import { Close } from "@mui/icons-material";
import classNames from "classnames";
import { ReactNode, useEffect, useRef } from "react";

export type TopNoticeProps = {
  className?: string;
  children?: ReactNode;
  onClickClose?: () => void;
};

export const TopNotice = ({
  className,
  children,
  onClickClose,
}: TopNoticeProps) => {
  const [isShowTail, setIsShowTail] = useBoolean(false);
  const innerDivRef = useRef<HTMLDivElement>(null);
  const outerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (innerDivRef.current && outerDivRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const outerWidth = entries[0].contentRect.width;
        const innerWidth = innerDivRef.current!.offsetWidth;
        if (outerWidth < innerWidth) {
          setIsShowTail.on();
        } else {
          setIsShowTail.off();
        }
      });
      resizeObserver.observe(outerDivRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [innerDivRef, outerDivRef]);

  return (
    <>
      {children && (
        <div
          className={classNames(
            "relative h-32 w-full bg-[#5dff47] px-64 py-3 font-bold text-gray-700",
            className
          )}
        >
          <div
            ref={outerDivRef}
            className="flex h-full w-full items-center justify-start gap-32 overflow-hidden"
          >
            <div
              ref={innerDivRef}
              className={classNames(
                "relative inline-block h-full w-max whitespace-nowrap",
                isShowTail ? "scroll" : "mx-auto"
              )}
            >
              {children}
            </div>
            {isShowTail && (
              <div className="inline-block h-full w-max whitespace-nowrap">
                {children}
              </div>
            )}
          </div>
          <IconButton
            className="!absolute !right-10 !top-[50%] !h-32 !translate-y-[-50%] !text-gray-700"
            variant="ghost"
            icon={<Close />}
            aria-label="공지 닫기"
            onClick={onClickClose}
          />
        </div>
      )}
      <style jsx>{`
        @keyframes scroll-keyframe {
          from {
            margin-left: 0;
          }
          to {
            margin-left: calc(-100% - 52px);
          }
        }
        .scroll {
          animation: scroll-keyframe 10s linear infinite;
        }
      `}</style>
    </>
  );
};
