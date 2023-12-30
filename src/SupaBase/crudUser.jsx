import Swal from "sweetalert2";
import { supabase } from "./Supabase.config";

export const insertUser = async (p) => {
  const { data, error } = await supabase
    .from("usuarios")
    .insert()
    .select()
    .maybeSingle();

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops..!",
      text: "Ocurio un error al insetar user " + error.message,
    });
  }

  if (data) return data;
};
