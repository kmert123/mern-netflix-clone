import toast from "react-hot-toast";
import { create } from "zustand";
import axios from "axios";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLoggingOut: false,
  isLoggingIn: false,
  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials);
      set({ user: response.data.user, isSigningUp: false });
      toast.success("account created successfully");
    } catch (error) {
      set({ isSigningUp: false, user: null });
      toast.error(error.response.data.message || "sign up error occurred");
    }
  },
  login: async (credentials) => {
    try {
      const response = await axios.post("/api/v1/auth/login", credentials);
      set({ user: response.data.user, isLoggingIn: false });
      toast.success("Logged in gracefully");
    } catch (error) {
      set({ user: null, isLoggingIn: false });
      toast.error(error.response.data.message || "login error okkured");
    }
  },
  logout: async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null, isLoggingOut: true });
      toast.success("Logged out successfully");
    } catch (error) {
      set({ isLoggingOut: false });
      toast.error(error.response.message || "Logout failed");
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get("/api/v1/auth/authCheck");

      set({ user: response.data.user, isCheckingAuth: false });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      set({ isCheckingAuth: false, user: null });
      // toast.error(error.response.data.message || "An error occurred");
    }
  },
}));
