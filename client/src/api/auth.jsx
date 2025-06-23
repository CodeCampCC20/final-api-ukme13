import axios from "axios";

export const actionLogin = async (value) => {
  return await axios.post("http://localhost:8000/auth/login/user", value);
};

export const actionRegister = async (value) => {
  return await axios.post("http://localhost:8000/auth/register/user", value);
};
