const express = require("express");

const router = express.Router();

const multer = require("multer");

const upload = multer({ dest: "./public/assets/images" });

const itemControllers = require("./controllers/itemControllers");
const foodsControllers = require("./controllers/foodsControllers");
const usersControllers = require("./controllers/usersControllers");
const loginControllers = require("./controllers/loginControllers");

const uploadFile = require("./services/uploadFile");
const validateLogin = require("./services/validateLogin");
const hashPassword = require("./services/hashPassword");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/foods", foodsControllers.browse);
router.get("/foods/:id", foodsControllers.read);
router.put(
  "/foods/:id",
  upload.single("image"),
  foodsControllers.edit,
  uploadFile.postFile
);
router.post(
  "/foods",
  upload.single("image"),
  uploadFile.postFile,
  foodsControllers.add
);
router.delete("/foods/:id", foodsControllers.destroy);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/users", hashPassword, usersControllers.create);

router.post(
  "/login",
  validateLogin,
  loginControllers.login,
  loginControllers.verifyPassword
);

module.exports = router;
