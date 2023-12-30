import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeuse, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const theme = themeuse === "light" ? "light" : "dark";
  const changeTheme = (newTheme) => setTheme(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
