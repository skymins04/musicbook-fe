import { FormProvider, useForm } from "react-hook-form";
import { CardLayout } from "@components";
import { GETMusicSearchSort } from "@apis";
import { MusicCardListSelector } from "./MusicCardListSelector";
import { MusicCardListContentsLoader } from "./MusicCardListContentsLoader";
import { MusicCardListContentsLoadingHandlerProps } from "./MusicCardListContents";

export type MusicCardListSelectorSchema = {
  sort: GETMusicSearchSort;
  category?: string;
};

export type MusicCardList = MusicCardListContentsLoadingHandlerProps;

export const MusicCardList = (props: MusicCardList) => {
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
      <CardLayout>
        <MusicCardListContentsLoader {...props} />
      </CardLayout>
    </FormProvider>
  );
};
