import { LoginDialog } from "@components/Dialog/LoginDialog";
import { useGlobalDisclosure } from "@hooks/useGlobalDisclosure";

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
