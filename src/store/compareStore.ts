import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CompareStore {
  compared: string[];
  toggleCompare: (id: string) => void;
}

export const useCompareStore = create<CompareStore>()(
  persist(
    (set) => ({
      compared: [],

    toggleCompare: (id) =>
  set((state) => {
    if (state.compared.includes(id)) {
      return {
        compared: state.compared.filter(
          (x) => x !== id
        ),
      };
    }

    if (state.compared.length >= 3) {
      return state;
    }

    return {
      compared: [...state.compared, id],
    };
  }),
    }),
    {
      name: "compare-colleges",
    }
  )
);