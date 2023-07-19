import UpdateForm from "@components/UpdateForm";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateGame() {
  const host = import.meta.env.VITE_BACKEND_URL;
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");

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

  return (
    <div>
      <h1>Liste</h1>
      <select
        value={selectedFood}
        onChange={(e) => setSelectedFood(parseInt(e.target.value, 10))}
      >
        <option value={null}> -- </option>
        {foods.map((food) => (
          <option key={food.id} value={food.id}>
            {food.title}
          </option>
        ))}
      </select>

      {selectedFood && <UpdateForm foodId={selectedFood} />}
    </div>
  );
}

export default UpdateGame;
