/* eslint-disable no-restricted-syntax */
import axios from "axios";
import { useState } from "react";

function AddForm() {
  const host = import.meta.env.VITE_BACKEND_URL;
  const [foods, setFoods] = useState({
    title: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFoods({
      ...foods,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", foods.title);
    formData.append("image", foods.image);

    axios
      .post(`${host}/foods`, formData)
      .then((response) => {
        console.log("Successfully added", response.data);
      })
      .catch((error) => {
        console.error("Error while added", error);
      });
  };

  return (
    <div>
      <h2>Ajouter le titre et l'image</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Ajouter le titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={foods.title}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="image">Ajouter l'image :</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/jpeg,image/png,image/tiff"
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddForm;
