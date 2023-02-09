import { defineStore } from "pinia";

export const useSampleStore = defineStore("SampleStore", {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCountPlusRandom: (state) => {
      return Math.round(state.count + Math.random() * 10);
    },
  },
  actions: {
    incrementCount() {
      this.count++;
    },
  },
});
