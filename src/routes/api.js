const express = require("express");
const { createUser, handleLogin } = require("../controllers/userController");
const { getUser, getAccount } = require("../controllers/userController");
const auth = require("../middleware/auth");

const routerAPI = express.Router();

routerAPI.all("*", auth);

routerAPI.get("/", (req, res) => {
  return res.status(200).json("Hello api");
});

routerAPI.post("/register", createUser);
routerAPI.post("/login", handleLogin);
routerAPI.get("/user", getUser);
routerAPI.get("/account", getAccount);

module.exports = routerAPI; //export default
