/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useState } from "react";

import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import { Alert, createTheme, Slide, Snackbar, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// import CurrentUserContext from "../contexts/CurrentUser";

function Login() {
  // const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const host = import.meta.env.VITE_BACKEND_URL;
  const [openLogin, setOpenLogin] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const theme = createTheme({
    typography: {
      fontSize: 30,
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    console.log(data);

    axios
      .post(`${host}/login`, formData)
      .then((response) => {
        console.log("bien connecté", response.data);
        setOpenLogin(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenLogin(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="loginForm">
        <span>Connection</span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login-form-container"
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                className="email-input"
                sx={{ input: { backgroundColor: "white" } }}
                helperText={fieldState.invalid ? "email is required" : ""}
                error={fieldState.invalid}
                label="Email"
                variant="outlined"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="password"
                className="password-input"
                sx={{ input: { backgroundColor: "white" } }}
                helperText={fieldState.invalid ? "password is required" : ""}
                error={fieldState.invalid}
                label="Mot de passe"
                variant="outlined"
              />
            )}
          />

          <div>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Valider
            </Button>
            <Snackbar
              open={openLogin}
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
                Bienvenue Dieu !
              </Alert>
            </Snackbar>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default Login;
