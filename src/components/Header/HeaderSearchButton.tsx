import { Search } from "@mui/icons-material";
import { Button } from "..";
import { useGlobalDisclosure } from "@hooks";

export const HeaderSearchButton = () => {
  const { on: showSearchSpotlight } = useGlobalDisclosure(
    "search-spotlight",
    false
  );

  return (
    <Button
      title="검색"
      variant="ghost"
      color="secondary"
      size="md"
      leftIcon={<Search sx={{ fontSize: "100%" }} />}
      className="box-border !w-[40px]"
      onClick={showSearchSpotlight}
    />
  );
};
