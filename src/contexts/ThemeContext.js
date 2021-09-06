import React, { useReducer, createContext } from "react";
import { themeReducer } from "../reducers/ThemeReducer";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  //State
  const [theme, dispatch] = useReducer(themeReducer, {
    isLightBg: true,
    light: {
      background: "rgb(240,240,240)",
      color: "black",
    },
    dark: {
      background: "rgb(39,39,39)",
      color: "white",
    },
  });

  //Context Data
  const ThemeContextData = { theme, dispatch };

  //Return
  return (
    <ThemeContext.Provider value={ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
