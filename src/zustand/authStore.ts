import { create } from 'zustand';

type AuthStore = {
  session: any;
  setSession: (session: any) => void;
  clearSession: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  clearSession: () => set({ session: null }),
}));
