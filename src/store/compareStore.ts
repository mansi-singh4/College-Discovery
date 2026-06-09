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
        set((state) => ({
          compared: state.compared.includes(id)
            ? state.compared.filter((x) => x !== id)
            : state.compared.length < 3
            ? [...state.compared, id]
            : state.compared,
        })),
    }),
    {
      name: "compare-colleges",
    }
  )
);