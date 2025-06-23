import axios from "axios";

export const getUser = async (token) => {
  return await axios.get("http://localhost:8000/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
