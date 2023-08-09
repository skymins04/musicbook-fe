import classNames from "classnames";
import { ReactNode } from "react";
import { Button } from "..";
import Link from "next/link";

export type ErrorPageProps = {
  statusCode: number;
  description: ReactNode;
  buttonArea?: ReactNode;
  buttonAreaClassName?: string;
};

export const ErrorPage = ({
  statusCode,
  description,
  buttonArea,
  buttonAreaClassName,
}: ErrorPageProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100 dark:bg-gray-700">
      <div className="text-center font-[TheJamsil5Bold] text-[160px] text-gray-600 dark:text-gray-300 mobile:text-[72px]">
        {statusCode}
      </div>
      <p className="mx-20 my-20 whitespace-pre-wrap text-center text-16 font-normal text-gray-600 keep-all dark:text-gray-300 mobile:text-14">
        {description}
      </p>
      <div
        className={classNames(
          "mt-20 flex items-center justify-center mobile:flex-col",
          buttonAreaClassName
        )}
      >
        {buttonArea || (
          <Link href="/" className="h-max w-max">
            <Button size="md">홈으로 이동</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
