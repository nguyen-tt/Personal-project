/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-syntax */
import axios from "axios";

import Button from "@mui/material/Button";
import { MuiFileInput } from "mui-file-input";
import { Controller, useForm } from "react-hook-form";
import { Alert, createTheme, Slide, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

function AddForm({ onAddFoodToList }) {
  const host = import.meta.env.VITE_BACKEND_URL;
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      img: undefined,
    },
  });

  const theme = createTheme({
    typography: {
      fontSize: 30,
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", data.image);

    axios
      .post(`${host}/foods`, formData)
      .then((response) => {
        console.log(response.data);
        onAddFoodToList(response.data);
        setOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="addForm">
        <span>AJOUTE UN COMBATTANT</span>
        <form onSubmit={handleSubmit(onSubmit)} className="add-form-container">
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                className="food-name-input"
                sx={{ input: { backgroundColor: "white" } }}
                helperText={fieldState.invalid ? "Food name is required" : ""}
                error={fieldState.invalid}
                label="Nom"
                variant="outlined"
              />
            )}
          />
          <Controller
            name="image"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <MuiFileInput
                {...field}
                label="Selectionne une image"
                sx={{ input: { backgroundColor: "white" } }}
                helperText={fieldState.invalid ? "Image is required" : ""}
                error={fieldState.invalid}
              />
            )}
          />
          <div>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Valider
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              TransitionComponent={Slide}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
                variant="filled"
              >
                Bienvenue au nouveau combattant !
              </Alert>
            </Snackbar>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default AddForm;
