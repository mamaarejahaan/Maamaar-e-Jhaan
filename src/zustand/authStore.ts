import { create } from 'zustand';

type AuthStore = {
  session: any;
  setSession: (session: any) => void;
  clearSession: () => void;
  showJoinUs:boolean
  setShowJoinUs:(val:boolean)=>void
};

export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  showJoinUs:true,
  setSession: (session) => set({ session }),
  clearSession: () => set({ session: null }),
  setShowJoinUs:(val)=>set({showJoinUs:val})
  

}));
