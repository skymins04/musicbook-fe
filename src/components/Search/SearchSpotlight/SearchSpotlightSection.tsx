import Link from "next/link";

export type SearchSpotlightSectionProps = {
  title: string;
  href: string;
};

export const SearchSpotlightSection = ({
  title,
  href,
}: SearchSpotlightSectionProps) => {
  return (
    <div className="box-border flex w-full items-end justify-between px-6">
      <h1 className="text-18 font-bold leading-1 text-gray-700 dark:text-white">
        {title}
      </h1>
      <Link
        href={href}
        className="text-12 font-normal text-gray-400 hover:underline"
      >
        검색결과 더보기
      </Link>
    </div>
  );
};
