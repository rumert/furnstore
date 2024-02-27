import { create } from 'zustand'

interface navState {
    nav: boolean
}

export const useStore = create<navState>((set) => ({
  nav: false,
  updateNav: (newNav: boolean) => set({ nav: newNav }),
}))
