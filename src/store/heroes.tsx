import { Heroes } from '@/app/types';
import { create } from 'zustand';

type StoreProps = {
  state: {
    heroes: Heroes[],
    filteredHeroes: Heroes[]
  },
  actions: {
    setHeroes: (data: Heroes[]) => void
    setFilteredHeroes: (data: Heroes[]) => void
  }
};

export const useHeroesStore = create<StoreProps>((set) => ({
  state: {
    heroes: [],
    filteredHeroes: [],
  },
  actions: {
    setHeroes: (data: Heroes[]) => set({ state: { heroes: data, filteredHeroes: data } }),
    setFilteredHeroes: (data: Heroes[]) => set((state) => (
      { state: { ...state.state, filteredHeroes: data } })),
  },
}));
