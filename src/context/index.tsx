import { createContext } from "react";
import { IAuthProvider, IContext, IUser } from "./type";
import { setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  async function authenticate(response: IUser) {
    if (response !== undefined) {
      setUserLocalStorage(response);
    }
  }

  const contextValue: IContext = {
    authenticate,
    accessToken: "",
    type: "",
    refreshToken: "",
    id: "",
    username: "",
    email: "",
    roles: ["", ""],
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};