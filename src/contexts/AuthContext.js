import { useState, createContext, useEffect } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  //State
  const [authenticated, setAuthenticated] = useState(false);

  //useEffect
  useEffect(() => {
    alert(
      authenticated
        ? "Login Successfully"
        : "You are logout. Please login to see the todos"
    );
  }, [authenticated]);

  //Dynamic logged
  const toggleLog = () => {
    setAuthenticated(!authenticated);
  };

  //Context Data
  const AuthContextData = { authenticated, toggleLog };

  return (
    <authContext.Provider value={AuthContextData}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
