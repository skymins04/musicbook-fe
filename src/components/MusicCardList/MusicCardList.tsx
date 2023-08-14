import { FormProvider, useForm } from "react-hook-form";
import { CardLayout } from "@components";
import { GETMusicSearchSort } from "@apis";
import { MusicCardListSelector } from "./MusicCardListSelector";
import { MusicCardListContentsLoader } from "./MusicCardListContentsLoader";
import { MusicCardListContentsLoadingHandlerProps } from "./MusicCardListContents";
import { ReactNode } from "react";

export type MusicCardListSelectorSchema = {
  sort: GETMusicSearchSort;
  category?: string;
};

export type MusicCardListProps = {
  bookId?: string;
  leftArea?: ReactNode;
  rightArea?: ReactNode;
} & MusicCardListContentsLoadingHandlerProps;

export const MusicCardList = ({
  leftArea,
  rightArea,
  ...props
}: MusicCardListProps) => {
  const formMethod = useForm<MusicCardListSelectorSchema>({
    mode: "all",
    defaultValues: {
      sort: "SUGGEST",
      category: undefined,
    },
  });

  return (
    <FormProvider {...formMethod}>
      <MusicCardListSelector className="mb-20" />
      <div className="flex w-full items-start justify-between gap-20">
        {leftArea}
        <CardLayout>
          <MusicCardListContentsLoader {...props} />
        </CardLayout>
        {rightArea}
      </div>
    </FormProvider>
  );
};
