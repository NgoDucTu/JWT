import axios from "axios";

const createUserApi = async (name, password, email) => {
  const URL = "http://localhost:8080/v1/api/register";
  const data = {
    name,
    password,
    email,
  };
  const res = await axios.post(URL, data);

  return res.data;
};

const loginApi = async (email, password) => {
  const URL = "http://localhost:8080/v1/api/login";
  const data = {
    email,
    password,
  };
  const res = await axios.post(URL, data);

  return res.data;
};

const getUserApi = async () => {
  const URL = "http://localhost:8080/v1/api/user";

  return axios.get(URL);
};

export { createUserApi, loginApi, getUserApi };
