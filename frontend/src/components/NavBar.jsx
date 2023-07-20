import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/" className="home-link">
        home
      </NavLink>
      <NavLink to="/game" className="game-link">
        game
      </NavLink>
      <NavLink to="/ranking" className="ranking-link">
        ranking
      </NavLink>
      <NavLink to="/update-game" className="update-game-link">
        update-game
      </NavLink>
    </div>
  );
}

export default NavBar;
