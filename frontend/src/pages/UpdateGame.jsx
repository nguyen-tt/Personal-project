/* eslint-disable import/no-unresolved */
import AddForm from "@components/AddForm";
import UpdateForm from "@components/UpdateForm";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateGame() {
  const host = import.meta.env.VITE_BACKEND_URL;
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedFoodData, setSelectedFoodData] = useState(null);

  useEffect(() => {
    axios
      .get(`${host}/foods`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (selectedFood) {
      axios
        .get(`${host}/foods/${selectedFood}`)
        .then((res) => {
          setSelectedFoodData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setSelectedFoodData(null);
    }
  }, [selectedFood]);

  return (
    <div>
      <AddForm />
      <h1>Liste</h1>
      <select
        value={selectedFood}
        onChange={(e) =>
          setSelectedFood(e.target.value !== "--" && e.target.value)
        }
      >
        <option value="--"> -- </option>
        {foods.map((food) => (
          <option key={food.id} value={food.id}>
            {food.title}
          </option>
        ))}
      </select>

      {selectedFoodData && (
        <>
          <img
            src={`${host}/assets/images/${selectedFoodData.img}`}
            alt={selectedFoodData.title}
          />
          <UpdateForm foodId={selectedFood} />
        </>
      )}
    </div>
  );
}

export default UpdateGame;
