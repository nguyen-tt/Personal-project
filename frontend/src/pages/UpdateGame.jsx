/* eslint-disable import/no-unresolved */
import AddForm from "@components/AddForm";
import UpdateForm from "@components/UpdateForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Alert,
  createTheme,
  Box,
  Collapse,
  Dialog,
  Slide,
  Snackbar,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { ThemeProvider } from "@mui/material/styles";

function UpdateGame() {
  const host = import.meta.env.VITE_BACKEND_URL;
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedFoodData, setSelectedFoodData] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const theme = createTheme({
    typography: {
      fontSize: 30,
    },
  });

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

  const handleOpenUpdate = (foodId) => {
    setSelectedFood(foodId);
    setOpenUpdate(true);
  };
  const handleOpenDeleteConfirm = (foodId) => {
    setSelectedFood(foodId);
    setOpenDeleteConfirm(true);
  };

  const renderFood = ({ food }) => {
    return (
      <ListItem className="list-item">
        <img
          key={food.id}
          src={`${host}/assets/images/${food.img}`}
          alt={food.title}
        />
        <ListItemText primary={food.title} secondary={`${food.vote} votes`} />
        <IconButton
          aria-label="settings"
          title="Settings"
          onClick={() => handleOpenUpdate(food.id)}
        >
          <SettingsIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          title="Delete"
          onClick={() => handleOpenDeleteConfirm(food.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  };

  const handleAddFoodToList = (newFood) => {
    setFoods((prevFoods) => [...prevFoods, newFood]);
  };

  const handleRemoveFood = () => {
    axios
      .delete(`${host}/foods/${selectedFood}`)
      .then((res) => {
        if (res.status === 204) setOpenAlert(true);
        // eslint-disable-next-line no-shadow
        axios.get(`${host}/foods`).then((res) => {
          setFoods(res.data);
        });
      })
      .catch((err) => console.error(err));
  };

  const cancelRemove = (e) => {
    e.preventDefault();
    setOpenDeleteConfirm(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="updategame">
        <Button variant="outlined" onClick={() => setOpenAdd(true)}>
          Add new food
        </Button>

        <Dialog
          open={openAdd}
          onClose={() => setOpenAdd(false)}
          TransitionComponent={Slide}
          TransitionProps={{ direction: "up" }}
        >
          <AddForm onAddFoodToList={handleAddFoodToList} />
        </Dialog>

        <Box sx={{ mt: 1 }}>
          <List>
            <TransitionGroup>
              {foods.map((food) => (
                <Collapse key={food.id}>
                  {renderFood({ food, handleRemoveFood })}
                </Collapse>
              ))}
              <Dialog
                open={openUpdate}
                onClose={() => setOpenUpdate(false)}
                TransitionComponent={Slide}
                TransitionProps={{ direction: "up" }}
              >
                {selectedFoodData && <UpdateForm food={selectedFoodData} />}
              </Dialog>
              {selectedFoodData && (
                <Dialog
                  open={openDeleteConfirm}
                  onClose={() => setOpenDeleteConfirm(false)}
                  TransitionComponent={Slide}
                  TransitionProps={{ direction: "up" }}
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleRemoveFood();
                      setOpenDeleteConfirm(false);
                    }}
                    onReset={cancelRemove}
                    className="delete-confirm-form"
                  >
                    <p>
                      Are you sure to delete <b>{selectedFoodData.title}</b> ?
                    </p>
                    <div className="button-confirmation">
                      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        Yes
                      </Button>
                      <Button type="reset" variant="contained" sx={{ mt: 2 }}>
                        No
                      </Button>
                    </div>
                  </form>
                </Dialog>
              )}
            </TransitionGroup>
          </List>
        </Box>
        <Snackbar
          open={openAlert}
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
            Successfuly deleted
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
}

export default UpdateGame;
