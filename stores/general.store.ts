import { create } from "zustand";

interface AboutSectionState {
  active: boolean;
  toggle: () => void;
}

export const useAboutSectionStore = create<AboutSectionState>()((set) => ({
  active: false,
  toggle: () => set((state) => ({ active: !state.active })),
}));
