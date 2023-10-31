import { Heroes } from '@/app/types';
import { create } from 'zustand';

type StoreProps = {
  state: {
    heroes: Heroes[],
    filteredHeroes: Heroes[]
    selectedHeroes: Heroes[]
    shuffledHeroes: Heroes[]
    modal: boolean
  },
  actions: {
    setHeroes: (data: Heroes[]) => void
    setFilteredHeroes: (data: Heroes[]) => void
    setSelectedHeroes: (data: Heroes[]) => void
    setShuffledHeroes: (data: Heroes[]) => void
    setModal: (modalOpen: boolean) => void
  }
};

export const useHeroesStore = create<StoreProps>((set) => ({
  state: {
    heroes: [],
    filteredHeroes: [],
    selectedHeroes: [],
    shuffledHeroes: [],
    modal: false,
  },
  actions: {
    setHeroes: (data: Heroes[]) => set(
      { state:
        { heroes: data,
          filteredHeroes: data,
          selectedHeroes: [],
          modal: false,
          shuffledHeroes: data } },
    ),
    setFilteredHeroes: (data: Heroes[]) => set((state) => (
      { state: { ...state.state, filteredHeroes: data } })),
    setSelectedHeroes: (data: Heroes[]) => set((state) => (
      { state: { ...state.state, selectedHeroes: data } })),
    setModal: (modalOpen: boolean) => set((state) => (
      { state: { ...state.state, modal: modalOpen } })),
    setShuffledHeroes: (data: Heroes[]) => set((state) => (
      { state: { ...state.state, shuffledHeroes: data } }
    )),
  },

}));
