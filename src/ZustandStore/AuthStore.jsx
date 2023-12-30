import { create } from "zustand";
import { supabase } from "../SupaBase/Supabase.config";

export const AuthStore = create((set, get) => ({
  signInWithEmail: async (v) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: v.email,
      password: v.password,
    });
    if (error) return null;
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw new Error("Ah ucurrido un error al intentar cerrar sesion", error);
  },
}));
