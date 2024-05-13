import { TCountState } from "@/types/count";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: (): TCountState => ({
    count: 0,
    name: "Eduardo",
    users: [
      { id: 1, firstName: "Nurul", age: 25, email: "nurul@gmail.com" },
      { id: 2, firstName: "Fikar", age: 25, email: "fikar@gmail.com" },
    ],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
      this.users[1].age++;
    },
    setUsers(users: { id: number; firstName: string; age: number }[]) {
      this.users = users;
    },
  },
  persist: {
    storage: sessionStorage,
    paths: ["count", "users"],
  },
});
