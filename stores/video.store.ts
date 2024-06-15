import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IVideoStore {
  timeCodesData: number[];
  timeCode: number;
  setTimeCode: (time: number) => void;
  isEnded: boolean;
  setIsEnded: (isEnded: boolean) => void;
  showText: boolean;
  setShowText: (showText: boolean) => void;
  startPlay: boolean;
  setStartPlay: (showText: boolean) => void;
}

interface IVBlockStore {
  currentBlock: number;
  updateCurrentBlock: (currentBlock: number) => void;
}

const initialTimeCodes = [
  0, 3.5, 6.9, 10.3, 13.7, 17, 20.3, 23.6, 26.9, 30.4, 33.2,
];

export const useVideoStore = create<IVideoStore>()(
  immer((set) => ({
    timeCodesData: initialTimeCodes,
    timeCode: 0,
    setTimeCode: (time) =>
      set((state) => {
        state.timeCode = time;
      }),
    isEnded: false,
    setIsEnded: (isEnded) =>
      set((state) => {
        state.isEnded = isEnded;
      }),
    showText: true,
    setShowText: (showText) =>
      set((state) => {
        state.showText = showText;
      }),
    startPlay: false,
    setStartPlay: (play) =>
      set((state) => {
        state.startPlay = play;
      }),
  }))
);

export const useVBlockStore = create<IVBlockStore>()(
  immer((set) => ({
    currentBlock: 0,
    updateCurrentBlock: (currentBlock) =>
      set((state) => {
        currentBlock;
      }),
  }))
);
