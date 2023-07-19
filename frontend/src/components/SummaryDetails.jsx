import axios from "axios";
import { useEffect, useState } from "react";

function SummaryDetails() {
  const host = import.meta.env.VITE_BACKEND_URL;
  const [details, setDetails] = useState([]);

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

  return (
    <div>
      {details.map((detail) => (
        <div key={detail.id}>
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
  );
}

export default SummaryDetails;
