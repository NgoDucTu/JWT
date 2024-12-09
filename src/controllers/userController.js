const { createUserService, loginService } = require("../services/userService");

const createUser = async (req, res) => {
  const { name, password, email } = req.body;

  const data = await createUserService(name, password, email);
  return res.status(200).json(data);
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService(email, password);
  return res.status(200).json(data);
};

module.exports = {
  createUser,
  handleLogin,
};
