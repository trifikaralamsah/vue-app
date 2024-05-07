import { defineStore } from "pinia";

interface TUser {
  id: string | number;
  name: string;
  age: number;
  email?: string;
}

interface TCountState {
  count: number;
  name: string;
  users: TUser[];
}

export const useCounterStore = defineStore("counter", {
  state: (): TCountState => ({
    count: 0,
    name: "Eduardo",
    users: [
      { id: 1, name: "Nurul", age: 25, email: "nurul@gmail.com" },
      { id: 2, name: "Fikar", age: 25, email: "fikar@gmail.com" },
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
  },
  persist: {
    storage: sessionStorage,
    paths: ["count", "users"],
  },
});
