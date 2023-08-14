import { Menu } from "@mui/icons-material";
import { Button } from "..";
import { useBreakpointSmaller } from "@hooks";
import { useGlobalDisclosure } from "@hooks";

export const HeaderToggleDrawerButton = () => {
  const isTablet = useBreakpointSmaller("tablet");
  const { toggle: toggleOpenDrawer } = useGlobalDisclosure("drawer", false);
  const { toggle: toggleMinifiedDrawer } = useGlobalDisclosure(
    "drawer-minified",
    false
  );
  const toggleDrawer = isTablet ? toggleOpenDrawer : toggleMinifiedDrawer;

  return (
    <Button
      variant="ghost"
      color="secondary"
      size="md"
      leftIcon={<Menu sx={{ fontSize: "100%" }} />}
      className="box-border !w-[40px]"
      onClick={toggleDrawer}
    />
  );
};
