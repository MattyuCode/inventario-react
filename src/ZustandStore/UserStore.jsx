import { create } from "zustand";
import { supabase } from "../SupaBase/Supabase.config";
import { insertUser } from "../index";

export const UserStore = create((set, get) => ({
  insertUserAdmin: async (user) => {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

    if (error) return null;

    console.log(data);
    await insertUser({
      id_auth: data.user.id,
      fecharegistro: new Date(),
      tipo_user: "Admin",
    });
  },
}));
