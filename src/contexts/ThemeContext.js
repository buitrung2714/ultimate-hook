import React,{ useState,createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    //State
    const [theme, setTheme] = useState({
        isLightBg: true,
        light:{
            background: "rgb(240,240,240)",
            color: "black",
        },
        dark:{
            background: "rgb(39,39,39)",
            color: "white",
        },
    })

    //Dynamic Mode:
    const toggleMode = () =>{
            setTheme({
            ...theme,
            isLightBg: !theme.isLightBg
        })
    } 

    //Context Data
    const ThemeContextData = { theme,toggleMode };

    //Return
    return (
        <ThemeContext.Provider value={ThemeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
