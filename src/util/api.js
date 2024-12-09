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

export { createUserApi };
