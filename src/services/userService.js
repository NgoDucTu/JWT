const e = require("cors");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUserService = async (name, password, email) => {
  try {
    //hash user pw
    const hashPw = await bcrypt.hash(password, saltRounds);

    //save user pw to db
    let result = await User.create({
      name: name,
      password: hashPw,
      email: email,
      role: "",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const loginService = async (email, password) => {
  try {
    //hash user pw
    const user = await User.findOne({ email: email });

    if (!user) {
      return {
        EC: 1,
        EM: "Email / Password wrong",
      };
    } else {
      const isMatchPassword = await bcrypt.compare(password, user.password);
      if (!isMatchPassword) {
        return {
          EC: 2,
          EM: "Email / Password wrong",
        };
      } else {
        // create an access token
        return "create an access token";
      }
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
  loginService,
};
