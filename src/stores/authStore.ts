import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: (): any => ({
    username: "Nurul",
    age: 25,
    email: "nurul@gmail.com",
    isLogin: false,
    firstName: "Nurul",
    lastName: "Fikar",
  }),
  getters: {
    fullName: (state) => state.firstName + " " + state.lastName,
  },
  actions: {
    logout() {
      this.login = false;
    },
  },
});
