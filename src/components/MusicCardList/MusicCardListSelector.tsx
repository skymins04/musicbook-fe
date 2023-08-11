import { useFormContext } from "react-hook-form";
import { Tabs, TabsProps, TabData } from "@components";
import { SEARCH_SORT_LABEL } from "@constants";
import { GETMusicSearchSort } from "@apis";
import { MusicCardListSelectorSchema } from "./MusicCardList";

export type MusicCardListSelector = Omit<TabsProps, "tabs" | "onChange">;

export const MUSIC_CARD_LIST_SELECTOR_TABS = [
  { id: "SUGGEST", label: SEARCH_SORT_LABEL["SUGGEST"] },
  { id: "category:J-POP", label: "J-POP" },
  { id: "category:발라드", label: "발라드" },
  { id: "category:랩/힙합", label: "랩/힙합" },
  { id: "category:R&B/Soul", label: "R&B/Soul" },
  { id: "category:인디음악", label: "인디음악" },
  { id: "NEWEST", label: SEARCH_SORT_LABEL["NEWEST"] },
  { id: "POPULAR", label: SEARCH_SORT_LABEL["POPULAR"] },
];

export const MusicCardListSelector = ({ ...props }: MusicCardListSelector) => {
  const { setValue } = useFormContext<MusicCardListSelectorSchema>();

  const handleChageTab = (tab: TabData) => {
    const [action, category] = tab.id.split(":");
    if (action === "category") {
      setValue("sort", "SUGGEST");
      setValue("category", category);
    }
    if ((SEARCH_SORT_LABEL as Record<string, string>)[action]) {
      setValue("sort", action as GETMusicSearchSort);
      setValue("category", undefined);
    }
  };

  return (
    <Tabs
      {...props}
      tabs={MUSIC_CARD_LIST_SELECTOR_TABS}
      onChange={handleChageTab}
    />
  );
};
