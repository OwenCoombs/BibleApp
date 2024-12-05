import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(() => {
    // Load initial state from localStorage
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Save dark mode preference in localStorage
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
