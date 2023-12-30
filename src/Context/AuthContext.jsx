import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../index";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("==========> ",event, session);
        async (event, session) => {
          if (session?.user === null) {
            setUser(null);
          } else {
            console.log("Aqui quiero ver que hay en esto ", session?.user);
            setUser(session?.user);
          }
        };
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
