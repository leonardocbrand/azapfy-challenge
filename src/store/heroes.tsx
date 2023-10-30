import { Heroes } from '@/app/types';
import { create } from 'zustand';

type StoreProps = {
  state: {
    heroes: Heroes[],
    filteredHeroes: Heroes[]
    selectedHeroes: Heroes[]
    modal: boolean
  },
  actions: {
    setHeroes: (data: Heroes[]) => void
    setFilteredHeroes: (data: Heroes[]) => void
    setSelectedHeroes: (data: Heroes[]) => void
    setModal: (modalOpen: boolean) => void
  }
};

export const useHeroesStore = create<StoreProps>((set) => ({
  state: {
    heroes: [],
    filteredHeroes: [],
    selectedHeroes: [],
    modal: false,
  },
  actions: {
    setHeroes: (data: Heroes[]) => set(
      { state:
        { heroes: data, filteredHeroes: data, selectedHeroes: [], modal: false } },
    ),
    setFilteredHeroes: (data: Heroes[]) => set((state) => (
      { state: { ...state.state, filteredHeroes: data } })),
    setSelectedHeroes: (data: Heroes[]) => set((state) => (
      { state: { ...state.state, selectedHeroes: data } })),
    setModal: (modalOpen: boolean) => set((state) => (
      { state: { ...state.state, modal: modalOpen } })),
  },

}));
