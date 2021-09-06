import { useReducer, createContext } from "react";
import { authReducer } from "../reducers/AuthReducer";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  //State
  const [authenticated, dispatch] = useReducer(authReducer, false);

  //Context Data
  const AuthContextData = { authenticated, dispatch };

  return (
    <authContext.Provider value={AuthContextData}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
