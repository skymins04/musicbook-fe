import { Music } from "@apis";
import { SearchMusicResultCard } from "./SearchMusicResultCard";

export type SearchSpotlightMusicResultProps = {
  musics: Music[];
};

export const SearchSpotlightMusicResult = ({
  musics,
}: SearchSpotlightMusicResultProps) => {
  return (
    <div className="relative h-max max-h-[256px] w-full overflow-y-auto overflow-x-hidden">
      <div className="flex h-max w-full flex-col items-stretch justify-start gap-3">
        {musics.map((music) => (
          <SearchMusicResultCard
            isShow
            key={music.id}
            id={music.id}
            title={music.title}
            bookTitle={music.book?.title || ""}
            src={
              music.musicSourceMelon?.albumThumbnail200 ||
              music.musicSourceOriginal?.albumThumbnail ||
              ""
            }
          />
        ))}
      </div>
    </div>
  );
};
