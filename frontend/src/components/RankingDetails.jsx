import axios from "axios";
import { useEffect, useState } from "react";
import eyes from "@assets/yeux.svg";
import NavBar from "./NavBar";

function RankingDetails() {
  const host = import.meta.env.VITE_BACKEND_URL;
  const [details, setDetails] = useState([]);
  const [remainingDetails, setRemainingDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${host}/foods`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (details.length > 3) {
      setRemainingDetails(details.slice(3));
    }
  }, [details]);

  return (
    <div className="ranking">
      <div className="inside-ranking">
        <NavBar />
        <div className="top-one">
          {details.slice(0, 1).map((detail) => (
            <div key={detail.id} className="top-one-detail">
              <figure className="top-one-figure">
                <img
                  src={`${host}/assets/images/${detail.img}`}
                  alt={detail.title}
                />
                <figcaption>{detail.title}</figcaption>
                <p>{detail.vote} votes</p>
              </figure>
            </div>
          ))}
        </div>
        <div className="top-two-three">
          {details.slice(1, 3).map((detail, index) => (
            <div key={detail.id} className="top-two-three-detail">
              <figure className={`top-image-${index + 1}`}>
                <img
                  src={`${host}/assets/images/${detail.img}`}
                  alt={detail.title}
                />
                <figcaption>{detail.title}</figcaption>
                <p>{detail.vote} votes</p>
              </figure>
            </div>
          ))}
        </div>
        <div className="remaining-container">
          {remainingDetails.map((detail, index) => {
            const currentIndex = 4 + index;
            return (
              <div className="index-container" key={detail.id}>
                <span>{currentIndex}</span>
                <div key={detail.id} className="remaining-detail">
                  <figure>
                    <img
                      src={`${host}/assets/images/${detail.img}`}
                      alt={detail.title}
                    />
                    <figcaption>{detail.title}</figcaption>
                    <p>{detail.vote} votes</p>
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
        <img className="eyes" src={eyes} alt="eyes-deco" />
      </div>
    </div>
  );
}

export default RankingDetails;
