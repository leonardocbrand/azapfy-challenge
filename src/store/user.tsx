import { create } from 'zustand';

type StoreProps = {
  state: {
    login: string,
  },
  actions: {
    setUser: (login: string) => void
  }
};

export const useUserStore = create<StoreProps>((set) => ({
  state: {
    login: '',
  },
  actions: {
    setUser: (login) => set({ state: { login } }),
  } }));
