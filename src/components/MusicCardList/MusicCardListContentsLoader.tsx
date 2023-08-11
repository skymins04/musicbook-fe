import { useFormContext } from "react-hook-form";
import {
  MusicCardListContents,
  MusicCardListContentsLoadingHandlerProps,
} from "./MusicCardListContents";
import { MusicCardListSelectorSchema } from "./MusicCardList";

export type MusicCardListContentsLoaderProps =
  MusicCardListContentsLoadingHandlerProps;

export const MusicCardListContentsLoader = (
  props: MusicCardListContentsLoaderProps
) => {
  const { watch } = useFormContext<MusicCardListSelectorSchema>();
  const selectorOptions = watch();

  return <MusicCardListContents {...selectorOptions} {...props} />;
};
