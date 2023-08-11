import { LoadingSpinner } from "@components/LoadingSpinner";

export const MusicCardListLoading = () => {
  return (
    <div className="flex w-full items-center justify-center py-[80px]">
      <LoadingSpinner className="h-[36px] w-[36px]" />
    </div>
  );
};
