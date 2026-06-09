import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SavedStore {
  saved: string[];
  toggleSaved: (id: string) => void;
}

export const useSavedStore = create<SavedStore>()(
  persist(
    (set) => ({
      saved: [],

      toggleSaved: (id) =>
        set((state) => ({
          saved: state.saved.includes(id)
            ? state.saved.filter((x) => x !== id)
            : [...state.saved, id],
        })),
    }),
    {
      name: "saved-colleges",
    }
  )
);