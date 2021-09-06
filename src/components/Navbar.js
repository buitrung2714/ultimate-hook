import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { authContext } from "../contexts/AuthContext";
import { TOGGLE_LOG } from "../reducers/types";

const Navbar = () => {
  //Load Context Theme
  const { theme } = useContext(ThemeContext);
  const { isLightBg, light, dark } = theme;
  const style = isLightBg ? light : dark;

  //Load Context Auth
  const { authenticated, dispatch } = useContext(authContext);

  //Dynamic Log
  const toggleLog = () => {
    dispatch({
      type: TOGGLE_LOG,
      payload: authenticated,
    });
  };

  //useEffect
  useEffect(() => {
    alert(
      authenticated
        ? "Login Successfully"
        : "You are logout. Please login to see the todos"
    );
  }, [authenticated]);

  return (
    <div className="navbar" style={style}>
      <h1>MY HOOK APP</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button onClick={toggleLog}>
            {authenticated ? `Logout` : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
