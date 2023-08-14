import { MoreVert } from "@mui/icons-material";
import { Button, EtcPopMenuItems, PopMenuButton } from "..";

export const HeaderEtcPopMenuButton = () => {
  return (
    <PopMenuButton
      btn={
        <Button
          title="기타"
          variant="ghost"
          color="secondary"
          size="md"
          leftIcon={<MoreVert sx={{ fontSize: "100%" }} />}
          className="box-border !w-[40px] mobile:hidden"
        />
      }
      menuItems={<EtcPopMenuItems />}
      menuDirection="bottom-left"
      popMenuClassName="!w-[200px]"
    />
  );
};
