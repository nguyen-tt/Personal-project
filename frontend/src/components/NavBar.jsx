import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/" className="home">
        home
      </NavLink>
      <NavLink to="/game" className="game">
        game
      </NavLink>
      <NavLink to="/summary" className="summary">
        summary
      </NavLink>
      <NavLink to="/update-game" className="update-game">
        update-game
      </NavLink>
      <NavLink to="/contact" className="contact">
        contact
      </NavLink>
      <NavLink to="/login" className="login">
        login
      </NavLink>
    </div>
  );
}

export default NavBar;
