"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeProviderType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeProviderType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const handelThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handelThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be use within a Theme Provider");
  }
  return context;
}
