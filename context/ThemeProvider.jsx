import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem("currentTheme");
      return savedTheme ? JSON.parse(savedTheme) : "light";
    } catch (error) {
      console.error("Failed to parse theme from localStorage:", error);
      return "light";
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("currentTheme", JSON.stringify(theme));
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ handleThemeSwitch, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
