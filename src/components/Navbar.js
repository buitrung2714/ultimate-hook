import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { authContext } from "../contexts/AuthContext";

const Navbar = () => {
  //Load Context Theme
  const { theme } = useContext(ThemeContext);
  const { isLightBg, light, dark } = theme;
  const style = isLightBg ? light : dark;

  //Load Context Auth
  const { authenticated, toggleLog } = useContext(authContext);

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
