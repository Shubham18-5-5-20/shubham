// components/Themeprovider.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define the types for our theme context
type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create the context with a default undefined value
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

// The main provider component
export function ThemeProvider({ children }: ThemeProviderProps) {
  // 1. State to hold the current theme.
  //    Default to 'dark' as per your portfolio's design.
  const [theme, setTheme] = useState<Theme>("dark");

  // 2. Effect to run on initial mount (client-side only).
  //    This will read the saved theme from localStorage and update the state.
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // 3. The function to toggle the theme.
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      // Save the new theme to localStorage
      localStorage.setItem("theme", newTheme);
      // Update the data-theme attribute on the HTML element
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };
  
  // 4. Effect to apply the theme to the HTML element whenever the theme state changes.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// 5. Custom hook to easily access the theme context in other components.
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  // This ensures the hook is used within a ThemeProvider.
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};