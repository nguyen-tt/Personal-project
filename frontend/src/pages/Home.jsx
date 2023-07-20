import { Link } from "react-router-dom";
import logo from "@assets/Logo-2.png";
import decoEtoile from "@assets/deco-etoile.svg";
import etoile from "@assets/etoile.png";
import footer from "@assets/footer.png";

function Home() {
  return (
    <div className="home">
      <div className="inside-home">
        <div className="center-home">
          <img className="logo" src={logo} alt="logo" />
          <Link to="/game" className="button-link">
            <button type="button" className="button-home">
              JOUER
            </button>
          </Link>
          <img className="stars-deco" src={decoEtoile} alt="star decoration" />
          <img className="star-deco2" src={etoile} alt="star decoration" />
        </div>
        <div className="footer">
          <div className="bgFooter-top">
            <img src={footer} alt="background footer" />
          </div>
          <div className="bgFooter-bot" />
        </div>
      </div>
    </div>
  );
}

export default Home;
