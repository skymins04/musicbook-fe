import { User } from "@apis";
import { ReactNode, createContext, useContext } from "react";

const UserContext = createContext<User | undefined>(undefined!);

export const useUserContext = () => useContext(UserContext);

export type UserContextProviderProps = {
  children: ReactNode;
  user?: User;
};

export const UserContextProvider = ({
  children,
  user,
}: UserContextProviderProps) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
