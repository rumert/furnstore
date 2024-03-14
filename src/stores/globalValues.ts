import { create } from 'zustand'

interface state {
    nav: boolean,
    isSearchBarActive: boolean
}

export const useStore = create<state>((set) => ({
  nav: false,
  isSearchBarActive: false,
  updateNav: (newNav: boolean) => set({ nav: newNav }),
  updateIsSearchBarActive: (newIsSearchBarActive: boolean) => set({ isSearchBarActive: newIsSearchBarActive }),
}))
