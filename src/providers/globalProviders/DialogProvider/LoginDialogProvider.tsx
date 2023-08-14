import { useGlobalDisclosure } from "@hooks";
import dynamic from "next/dynamic";

const LoginDialog = dynamic(() =>
  import("@components/Dialog/LoginDialog").then((mod) => mod.LoginDialog)
);

export const LoginDialogProvider = () => {
  const { data, setData } = useGlobalDisclosure("login-dialog", false);

  return (
    <LoginDialog
      isOpen={data}
      onClose={() => {
        setData(false);
      }}
    />
  );
};
