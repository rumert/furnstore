import { create } from 'zustand'

interface state {
    nav: boolean,
    navbarRooms: boolean
}

export const useStore = create<state>((set) => ({
  nav: false,
  updateNav: (newNav: boolean) => set({ nav: newNav }),
  navbarRooms: false,
  updateNavbarRooms: (newNavbarRooms: boolean) => set({ navbarRooms: newNavbarRooms }),
}))
