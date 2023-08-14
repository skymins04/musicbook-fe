import { useFormContext } from "react-hook-form";
import { MusicCardListContents } from "./MusicCardListContents";
import {
  MusicCardListProps,
  MusicCardListSelectorSchema,
} from "./MusicCardList";

export const MusicCardListContentsLoader = (props: MusicCardListProps) => {
  const { watch } = useFormContext<MusicCardListSelectorSchema>();
  const selectorOptions = watch();

  return <MusicCardListContents {...selectorOptions} {...props} />;
};
