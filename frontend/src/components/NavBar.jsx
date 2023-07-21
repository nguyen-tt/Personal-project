import { NavLink } from "react-router-dom";
import logo from "@assets/Petit-logo-2.png";
import joystick from "@assets/joystick.png";
import coupenav from "@assets/coupenav.png";
import etoilenav from "@assets/etoilenav.png";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="home-link">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <NavLink to="/game" className="game-link">
        <img src={joystick} alt="game link" />
      </NavLink>
      <NavLink to="/ranking" className="ranking-link">
        <img src={coupenav} alt="ranking link" />
      </NavLink>
      <NavLink to="/update-game" className="update-game-link">
        <img src={etoilenav} alt="update link" />
      </NavLink>
    </div>
  );
}

export default NavBar;
