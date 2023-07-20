/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import axios from "axios";

import Button from "@mui/material/Button";
import { MuiFileInput } from "mui-file-input";
import { Controller, useForm } from "react-hook-form";
import { Alert, createTheme, Slide, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

function UpdateForm({ food }) {
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
      palette: {
        error: {
          main: "#e57373",
        },
      },
    },
  });

  const onSubmit = (data) => {
    const updatedData = {
      title: data.title || food.title,
      image: data.image || undefined,
    };

    const formData = new FormData();
    formData.append("title", updatedData.title);
    if (updatedData.image) {
      formData.append("image", updatedData.image);
    }

    axios
      .put(`${host}/foods/${food.id}`, formData)
      .then((response) => {
        console.log("successfuly modified", response.data);
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
      <div className="updateForm">
        <h2>{food.title}</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="update-form-container"
        >
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ input: { backgroundColor: "white" } }}
                className="food-name-input"
                helperText={fieldState.invalid ? "Food name is required" : ""}
                error={fieldState.invalid}
                label="Change food name"
                variant="outlined"
              />
            )}
          />
          <Controller
            name="image"
            control={control}
            render={({ field, fieldState }) => (
              <MuiFileInput
                {...field}
                // color="error"
                // focused
                label="Select new image"
                helperText={fieldState.invalid ? "Image is required" : ""}
                error={fieldState.invalid}
              />
            )}
          />
          <div>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Confirm change
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6500}
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
                Successfully modifying
              </Alert>
            </Snackbar>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default UpdateForm;
