import { createContext, useContext } from "react";

export const UserContext = createContext();

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!useContext) throw new Error("No context found");

  return userContext;
};
