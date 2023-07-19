import axios from "axios";
import { useEffect, useState } from "react";

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
      <div className="top-three-container">
        {details.slice(0, 3).map((detail) => (
          <div key={detail.id} className="top-three-detail">
            <figure>
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
            <div key={detail.id} className="remaining-detail">
              <figure>
                <img
                  src={`${host}/assets/images/${detail.img}`}
                  alt={detail.title}
                />
                <figcaption>{detail.title}</figcaption>
                <p>{detail.vote} votes</p>
                <p>Numéro : {currentIndex}</p>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RankingDetails;
