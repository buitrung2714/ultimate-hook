import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SHOW_MODE } from "../reducers/types";

const ButtonTheme = () => {
  //context
  const {
    theme: { isLightBg },
    dispatch,
  } = useContext(ThemeContext);

  const toggleMode = () => {
    dispatch({
      type: SHOW_MODE,
      payload: isLightBg,
    });
  };

  return (
    <div className="toggle-btn" onClick={toggleMode}>
      <button>{isLightBg ? `Dark` : `Light`} Mode</button>
    </div>
  );
};

export default ButtonTheme;
