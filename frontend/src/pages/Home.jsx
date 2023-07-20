import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="inside-home">
        <h1>BIENVENUE</h1>
        <Link to="/game" className="button-link">
          <button type="button" className="button-home">
            JOUER
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
