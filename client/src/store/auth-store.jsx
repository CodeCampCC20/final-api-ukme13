import { create } from "zustand";
import { actionLogin } from "../api/auth";
import { getUser } from "../api/user";
import { persist } from "zustand/middleware";

const authStore = (set) => ({
  accessToken: null,
  user: [],
  displayName: null,
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionLogin(value);
      console.log(res)
      const { payload, accessToken } = res.data;
      const result = await getUser(accessToken);
      console.log(payload);
      set({
        accessToken: accessToken,
        user: payload,
      });
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false, message: error.response?.data?.message };
    }
  },
});

const useAuthStore = create(persist(authStore, { name: "auth-store" }));

export default useAuthStore;
