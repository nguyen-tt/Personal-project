const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const foodsControllers = require("./controllers/foodsControllers");
const usersControllers = require("./controllers/usersControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/foods", foodsControllers.browse);
router.get("/foods/:id", foodsControllers.read);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);

module.exports = router;
