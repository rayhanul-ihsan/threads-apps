import { useState } from "react";
import { ThemeContext } from "../context/theme-context";

export const ThemeProvider: React.FC<any> = ({children}): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("ui.theme") as "light" | "dark") || "dark"
  );

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
    localStorage.setItem("ui.theme", val);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;