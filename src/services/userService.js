require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const createUserService = async (name, password, email) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      console.log("Exist, please use another");
      return null;
    }
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
        const payload = {
          email: user.email,
          name: user.name,
        };
        const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
        return {
          EC: 0,
          access_token,
          user: {
            email: user.email,
            name: user.name,
          },
        };
      }
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getUserService = async () => {
  try {
    let result = await User.find({});
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
  loginService,
  getUserService,
};
